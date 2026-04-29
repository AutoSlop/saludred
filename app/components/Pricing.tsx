const planes = [
  {
    nombre: "Paciente",
    descripcion: "Acceso directo a tu salud preventiva",
    items: [
      { label: "Acceso básico", valor: "Gratis" },
      { label: "Plan Premium", valor: "COP $15.000 – $35.000/mes" },
    ],
    features: [
      "Seguimiento personalizado de salud",
      "Alertas de adherencia",
      "Contenido preventivo segmentado",
      "Historial y métricas de bienestar",
    ],
    destacado: false,
  },
  {
    nombre: "Prestador / IPS / Clínica",
    descripcion: "Pilotos de gestión de riesgo medibles",
    items: [
      { label: "Setup inicial", valor: "USD $3.000 – $6.000" },
      { label: "Hasta 200 pacientes", valor: "USD $1.200/mes" },
      { label: "201–500 pacientes", valor: "USD $2.000/mes" },
      { label: "O por paciente activo", valor: "USD $2 – $3/mes" },
    ],
    features: [
      "Implementación en 2 semanas",
      "Scoring de riesgo con IA",
      "Panel de cohortes y tareas clínicas",
      "Contenido preventivo segmentado",
      "Soporte y configuración dedicada",
    ],
    destacado: true,
  },
  {
    nombre: "Asegurador / EPS",
    descripcion: "Gestión de riesgo poblacional",
    items: [
      { label: "Setup inicial", valor: "USD $5.000 – $12.000" },
      { label: "Por paciente activo", valor: "USD $3 – $6/mes" },
      { label: "Componente variable", valor: "Según desempeño" },
    ],
    features: [
      "Panel poblacional avanzado",
      "Indicadores de adherencia y riesgo",
      "Reportes por cohorte y patología",
      "Opción de pago variable por resultados",
      "Integraciones bajo demanda",
    ],
    destacado: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Pricing orientativo
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Planes diseñados para validar resultados rápidamente con pilotos
            controlados de 100 a 500 pacientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.destacado
                  ? "bg-primary text-white ring-4 ring-primary/20"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.destacado ? "text-white" : "text-text"
                }`}
              >
                {plan.nombre}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.destacado ? "text-white/75" : "text-text-light"
                }`}
              >
                {plan.descripcion}
              </p>

              <div className="space-y-3 mb-6">
                {plan.items.map((item) => (
                  <div key={item.label}>
                    <span
                      className={`text-xs font-medium uppercase tracking-wider ${
                        plan.destacado ? "text-white/60" : "text-text-light"
                      }`}
                    >
                      {item.label}
                    </span>
                    <p
                      className={`text-lg font-bold ${
                        plan.destacado ? "text-white" : "text-primary"
                      }`}
                    >
                      {item.valor}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.destacado ? "text-white/90" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center px-6 py-3 rounded-full font-semibold transition-colors ${
                  plan.destacado
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Solicitar demo
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-light max-w-2xl mx-auto">
          * Los valores son orientativos y se ajustan según el alcance del
          piloto, número de pacientes y requerimientos específicos de cada
          organización. Contáctenos para una cotización personalizada.
        </p>

        {/* Founder offer */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-white rounded-2xl border-2 border-accent/30 p-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Oferta Fundador
          </div>
          <h3 className="text-xl font-bold text-text mb-2">
            15% de descuento para los primeros 5 clientes
          </h3>
          <p className="text-text-light">
            Únete como cliente fundador y obtén un 15% de descuento en setup y
            suscripción mensual durante el primer año de operación.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center mt-6 px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
          >
            Solicitar demo como fundador
          </a>
        </div>
      </div>
    </section>
  );
}
