"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    organizacion: "",
    cargo: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", organizacion: "", cargo: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Listo para transformar la gestión de riesgo en salud?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Solicita una demo y descubre cómo SaludRed puede ayudarte a operar pilotos medibles en solo 2 semanas.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-text mb-1">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="organizacion" className="block text-sm font-medium text-text mb-1">
                  Organización
                </label>
                <input
                  type="text"
                  id="organizacion"
                  value={form.organizacion}
                  onChange={(e) => setForm({ ...form, organizacion: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="EPS, IPS, clínica..."
                />
              </div>
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-text mb-1">
                  Cargo
                </label>
                <input
                  type="text"
                  id="cargo"
                  value={form.cargo}
                  onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Tu cargo"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-text mb-1">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                placeholder="Cuéntanos sobre tu organización y lo que buscas..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full px-6 py-3.5 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Solicitar demo"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-center text-sm text-accent font-medium">
              ¡Mensaje enviado! Nos pondremos en contacto pronto.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-500 font-medium">
              Hubo un error. Por favor intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
