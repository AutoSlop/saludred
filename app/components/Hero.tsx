export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Prevención y gestión de riesgo en salud, conectada en una sola red
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          SaludRed une pacientes, prestadores y aseguradores en pilotos rápidos
          de 100 a 500 pacientes para detectar riesgo, activar seguimiento y
          mejorar resultados — sin integraciones complejas al inicio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg"
          >
            Solicitar demo
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}
