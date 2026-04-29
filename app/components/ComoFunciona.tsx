const actores = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    titulo: "Paciente",
    descripcion:
      "Recibe seguimiento personalizado, alertas de adherencia y contenido preventivo segmentado según su perfil de riesgo.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titulo: "Prestador (IPS/Clínica)",
    descripcion:
      "Visualiza cohortes de pacientes, gestiona tareas clínicas pendientes y prioriza casos según scoring de riesgo con IA.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titulo: "Asegurador (EPS/Aseguradora)",
    descripcion:
      "Accede a paneles poblacionales con indicadores de adherencia, riesgo y resultados para tomar decisiones basadas en datos.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            SaludRed conecta a los tres actores clave del sistema de salud en una sola plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actores.map((actor) => (
            <div
              key={actor.titulo}
              className="bg-bg rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {actor.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{actor.titulo}</h3>
              <p className="text-text-light leading-relaxed">{actor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
