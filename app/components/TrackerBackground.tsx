"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type LngLat = [number, number];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function routePoint(route: LngLat[], t: number): LngLat {
  const n = route.length;
  if (n < 2) return route[0] ?? [0, 0];
  const segs = n - 1;
  const x = t * segs;
  const i = Math.min(Math.floor(x), segs - 1);
  const p = x - i;
  const a = route[i];
  const b = route[i + 1];
  return [lerp(a[0], b[0], p), lerp(a[1], b[1], p)];
}

function routeCenter(route: LngLat[]): LngLat {
  // centro aproximado (média)
  let sx = 0;
  let sy = 0;
  const n = route.length || 1;
  for (const p of route) {
    sx += p[0];
    sy += p[1];
  }
  return [sx / n, sy / n];
}

function makeCarEl(size = 40) {
  const svg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 64 64">
    <defs>
      <filter id="shadow" x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="rgba(0,0,0,.9)"/>
      </filter>
      <linearGradient id="car" x1="0" x2="1">
        <stop offset="0" stop-color="#070a10"/>
        <stop offset="1" stop-color="#1f2937"/>
      </linearGradient>
    </defs>
    <g filter="url(#shadow)">
      <path d="M14 38c0-7 5-12 12-12h12c7 0 12 5 12 12v7H14v-7z" fill="url(#car)"/>
      <path d="M20 26l4-8h16l4 8H20z" fill="#b91c1c"/>
      <rect x="23" y="34" width="18" height="6" rx="3" fill="#ffffff" opacity="0.16"/>
      <circle cx="22" cy="46" r="4.2" fill="#05070b"/>
      <circle cx="42" cy="46" r="4.2" fill="#05070b"/>
      <circle cx="22" cy="46" r="2" fill="#9ca3af" opacity="0.35"/>
      <circle cx="42" cy="46" r="2" fill="#9ca3af" opacity="0.35"/>
    </g>
  </svg>`);

  const el = document.createElement("div");
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.backgroundImage = `url("data:image/svg+xml,${svg}")`;
  el.style.backgroundSize = "contain";
  el.style.backgroundRepeat = "no-repeat";
  el.style.transformOrigin = "center";
  el.style.filter = "drop-shadow(0 12px 20px rgba(0,0,0,.55))";
  return el;
}

async function fetchRoadLines(
  bounds: maplibregl.LngLatBounds
): Promise<LngLat[][]> {
  // bbox: south,west,north,east
  const s = bounds.getSouth();
  const w = bounds.getWest();
  const n = bounds.getNorth();
  const e = bounds.getEast();

  const query = `
  [out:json][timeout:25];
  (
    way["highway"~"motorway|trunk|primary|secondary|tertiary|residential|unclassified|service"](${s},${w},${n},${e});
  );
  out geom;
  `;

  const url = "https://overpass-api.de/api/interpreter";
  const res = await fetch(url, {
    method: "POST",
    body: query,
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
  });

  if (!res.ok) throw new Error("Overpass failed");

  const data = await res.json();

  const lines: LngLat[][] = [];
  for (const el of data.elements ?? []) {
    if (
      el.type === "way" &&
      Array.isArray(el.geometry) &&
      el.geometry.length >= 2
    ) {
      const coords: LngLat[] = el.geometry.map((p: any) => [p.lon, p.lat]);
      lines.push(coords);
    }
  }

  // filtra linhas curtinhas e limita pra não pesar
  return lines.filter((l) => l.length >= 6).slice(0, 1200);
}

export default function TrackerBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
          },
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }],
      },
      center: [-46.6333, -23.5505],
      zoom: 13.6,
      pitch: 55,
      bearing: -20,
      interactive: false,
      attributionControl: false,
    });

    let raf = 0;
    let loadingRoads = false;

    const CAR_COUNT = 32;

    type Car = {
      marker: maplibregl.Marker;
      route: LngLat[];
      t: number;
      speed: number;
    };

    const cars: Car[] = [];
    let roadsSorted: LngLat[][] = [];

    function clearCars() {
      for (const c of cars) c.marker.remove();
      cars.length = 0;
    }

    function sortRoadsForSpread(
      roads: LngLat[],
      b: maplibregl.LngLatBounds
    ): never;
    function sortRoadsForSpread(roads: LngLat[][], b: maplibregl.LngLatBounds) {
      const w = b.getWest();
      const e = b.getEast();
      const s = b.getSouth();
      const n = b.getNorth();

      const dx = Math.max(1e-9, e - w);
      const dy = Math.max(1e-9, n - s);

      // Ordena por “diagonal” (x+y) pra cobrir a tela inteira
      roadsSorted = roads
        .map((r) => {
          const [cx, cy] = routeCenter(r);
          const nx = (cx - w) / dx;
          const ny = (cy - s) / dy;
          const key = nx + ny * 1.07; // leve peso no y
          return { r, key };
        })
        .sort((a, b2) => a.key - b2.key)
        .map((x) => x.r);
    }

    function pickRoadSpread(i: number): LngLat[] | null {
      if (!roadsSorted.length) return null;
      // pega uma estrada “equidistante” no array ordenado
      const idx = Math.floor(
        (i / Math.max(1, CAR_COUNT - 1)) * (roadsSorted.length - 1)
      );
      // pequeno jitter pra não ficar artificial
      const j = Math.round(rand(-6, 6));
      const k = Math.min(Math.max(idx + j, 0), roadsSorted.length - 1);
      return roadsSorted[k] ?? null;
    }

    function spawnCars() {
      if (!roadsSorted.length) return;

      clearCars();

      for (let i = 0; i < CAR_COUNT; i++) {
        const route = pickRoadSpread(i);
        if (!route) continue;

        const size = Math.round(rand(38, 52));
        const el = makeCarEl(size);

        const t = Math.random();
        const [lng, lat] = routePoint(route, t);

        const marker = new maplibregl.Marker({ element: el, anchor: "center" })
          .setLngLat([lng, lat])
          .addTo(map);

        cars.push({
          marker,
          route,
          t,
          // velocidade um pouco maior (fica mais vivo)
          speed: rand(0.001, 0.0022),
        });
      }
    }

    function animate() {
      for (const c of cars) {
        c.t += c.speed;
        if (c.t >= 1) {
          c.t = 0;
        }
        const [lng, lat] = routePoint(c.route, c.t);
        c.marker.setLngLat([lng, lat]);
      }
      raf = requestAnimationFrame(animate);
    }

    async function loadRoadsAndRespawn() {
      if (loadingRoads) return;
      loadingRoads = true;

      try {
        // bounds um pouco maior pra pegar mais ruas e “espalhar”
        const b = map.getBounds();
        const padLng = (b.getEast() - b.getWest()) * 0.15;
        const padLat = (b.getNorth() - b.getSouth()) * 0.15;
        const padded = new maplibregl.LngLatBounds(
          [b.getWest() - padLng, b.getSouth() - padLat],
          [b.getEast() + padLng, b.getNorth() + padLat]
        );

        const roads = await fetchRoadLines(padded);
        if (roads.length) {
          sortRoadsForSpread(roads, padded);
          spawnCars();
        }
      } catch {
        // Overpass pode oscilar, não quebra a página
      } finally {
        loadingRoads = false;
      }
    }

    map.once("load", () => {
      // garante que o mapa tem tamanho real antes de pegar bounds/ruas
      map.resize();
      setTimeout(() => {
        map.resize();
        loadRoadsAndRespawn();
        raf = requestAnimationFrame(animate);
      }, 200);
    });

    const onResize = () => {
      map.resize();
      // respawn quando a tela muda (mantém espalhado)
      loadRoadsAndRespawn();
    };

    window.addEventListener("resize", onResize);

    // Atualiza ruas de tempos em tempos e respawna espalhado
    const refresh = setInterval(loadRoadsAndRespawn, 15000);

    return () => {
      clearInterval(refresh);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      clearCars();
      map.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div ref={ref} className="h-full w-full" />
      {/* overlay leve */}
      <div className="pointer-events-none absolute inset-0 bg-black/12" />
    </div>
  );
}
