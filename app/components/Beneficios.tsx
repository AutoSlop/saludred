const beneficios = [
  {
    titulo: "Implementación en 2 semanas",
    descripcion:
      "Sin integraciones complejas al inicio. Configura tu piloto y comienza a operar rápidamente.",
  },
  {
    titulo: "Pilotos medibles de 100 a 500 pacientes",
    descripcion:
      "Valida resultados con cohortes controladas antes de escalar a toda la población.",
  },
  {
    titulo: "Priorización inteligente de casos",
    descripcion:
      "Scoring de riesgo con IA para enfocar recursos donde más se necesitan.",
  },
  {
    titulo: "Seguimiento oportuno",
    descripcion:
      "Alertas automáticas y asignación de tareas para que ningún paciente quede sin atención.",
  },
  {
    titulo: "Enfoque en diabetes e hipertensión",
    descripcion:
      "Diseñado para las patologías crónicas de mayor impacto en Colombia.",
  },
  {
    titulo: "Contenido preventivo personalizado",
    descripcion:
      "Material educativo segmentado por perfil de riesgo para empoderar a cada paciente.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Beneficios del piloto
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Resultados tangibles desde las primeras semanas de operación
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, i) => (
            <div key={beneficio.titulo} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-text mb-1">{beneficio.titulo}</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
