import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donde habitan los versos | Poemario",
  description: "Una experiencia literaria interactiva en tres partes: amor, nostalgia y esperanza.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
