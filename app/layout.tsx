import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verimed.vercel.app"),
  title: "Verimed — Prevención y gestión de riesgo en salud",
  description:
    "Plataforma B2B de salud digital para EPS, aseguradoras, IPS y clínicas en Colombia. Coordina prevención y gestión de riesgo entre pacientes, prestadores y aseguradores.",
  applicationName: "Verimed",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Verimed — Prevención y gestión de riesgo en salud",
    description:
      "Plataforma B2B de salud digital para EPS, aseguradoras, IPS y clínicas en Colombia. Coordina prevención y gestión de riesgo entre pacientes, prestadores y aseguradores.",
    siteName: "Verimed",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary",
    title: "Verimed — Prevención y gestión de riesgo en salud",
    description:
      "Plataforma B2B de salud digital para EPS, aseguradoras, IPS y clínicas en Colombia.",
  },
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
