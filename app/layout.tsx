import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaludRed — Prevención y gestión de riesgo en salud",
  description:
    "Plataforma B2B de salud digital para EPS, aseguradoras, IPS y clínicas en Colombia. Coordina prevención y gestión de riesgo entre pacientes, prestadores y aseguradores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
