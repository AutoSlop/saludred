export default function Footer() {
  return (
    <footer className="bg-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold text-white">
              Salud<span className="text-accent">Red</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Plataforma B2B de salud digital para Colombia
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <a href="mailto:info@example.com" className="hover:text-white transition-colors">
              info@example.com
            </a>
            <span className="hidden sm:inline">·</span>
            <span>+00 000 000 0000</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SaludRed. Todos los derechos reservados.</p>
          <nav className="flex gap-6">
            <a href="#como-funciona" className="hover:text-gray-300 transition-colors">
              Cómo funciona
            </a>
            <a href="#modulos" className="hover:text-gray-300 transition-colors">
              Módulos
            </a>
            <a href="#pricing" className="hover:text-gray-300 transition-colors">
              Pricing
            </a>
            <a href="#contacto" className="hover:text-gray-300 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
