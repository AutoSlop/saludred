const planes = [
  {
    nombre: "Piloto Inicial",
    pacientes: "Hasta 200 pacientes",
    setup: "USD $3,000 – $6,000",
    mensual: "USD $1,200/mes",
    features: [
      "Perfiles multirol",
      "Captura curada de datos",
      "Scoring de riesgo con IA",
      "Alertas y tareas operativas",
      "Panel poblacional básico",
      "Contenido preventivo segmentado",
      "Implementación en 2 semanas",
    ],
    destacado: false,
  },
  {
    nombre: "Piloto Avanzado",
    pacientes: "De 201 a 500 pacientes",
    setup: "USD $3,000 – $6,000",
    mensual: "USD $2,000/mes",
    features: [
      "Todo lo del plan Inicial",
      "Mayor capacidad de cohortes",
      "Reportes avanzados",
      "Soporte prioritario",
      "Configuración personalizada de reglas",
      "Integraciones bajo demanda",
    ],
    destacado: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">Pricing</h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Planes diseñados para validar resultados rápidamente con pilotos controlados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`rounded-2xl p-8 ${
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
                {plan.pacientes}
              </p>

              <div className="mb-2">
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    plan.destacado ? "text-white/60" : "text-text-light"
                  }`}
                >
                  Setup inicial
                </span>
                <p
                  className={`text-lg font-bold ${
                    plan.destacado ? "text-white" : "text-text"
                  }`}
                >
                  {plan.setup}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    plan.destacado ? "text-white/60" : "text-text-light"
                  }`}
                >
                  Suscripción mensual
                </span>
                <p
                  className={`text-2xl font-bold ${
                    plan.destacado ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.mensual}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.destacado ? "text-accent" : "text-accent"
                      }`}
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
            Quiero ser fundador
          </a>
        </div>
      </div>
    </section>
  );
}
