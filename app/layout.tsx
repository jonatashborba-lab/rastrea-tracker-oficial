import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rastrea Tracker",
  description: "Rastreamento veicular profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-black text-white antialiased"
      >
        {children}
      </body>
    </html>
  );
}
