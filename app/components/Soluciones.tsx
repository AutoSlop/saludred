const soluciones = [
  {
    titulo: "Paciente",
    subtitulo: "Acceso gratuito + plan premium",
    descripcion:
      "Recibe seguimiento personalizado de tu salud, alertas de adherencia y contenido preventivo segmentado. Accede gratis a las funciones básicas o activa el plan premium para un acompañamiento más completo.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    titulo: "Prestador / IPS / Clínica",
    subtitulo: "Piloto con setup + suscripción mensual",
    descripcion:
      "Implementa pilotos de gestión de riesgo en cohortes de 100 a 500 pacientes. Visualiza indicadores, prioriza casos con scoring de IA y coordina tareas clínicas — operativo en 2 semanas, sin integraciones complejas al inicio.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    titulo: "Asegurador / EPS",
    subtitulo: "Programa de gestión de riesgo con fee mensual",
    descripcion:
      "Gestiona riesgo poblacional con paneles de cohortes, adherencia y resultados. Incluye setup personalizado, fee mensual por paciente activo y opción de componente variable vinculado a desempeño clínico.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Soluciones por tipo de cliente
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Verimed se adapta a las necesidades de cada actor del sistema de salud
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {soluciones.map((sol) => (
            <div
              key={sol.titulo}
              className="bg-bg rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-1">{sol.titulo}</h3>
              <p className="text-sm font-semibold text-accent mb-3">{sol.subtitulo}</p>
              <p className="text-text-light leading-relaxed mb-6 flex-grow">{sol.descripcion}</p>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-sm"
              >
                Solicitar demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
