import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="home" className="relative bg-black text-white shadow-md sticky top-0 z-50 overflow-hidden">
      {/* Fondo de video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-[-1]"
      >
        <source src="/dnaBackground.webm" type="video/webm" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido principal */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <a href="#home" className="text-2xl font-bold hover:text-red-500">
          Gisela Spina
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#about" className="hover:text-red-500">Sobre mí</a></li>
          <li><a href="#tech" className="hover:text-red-500">Tecnologías</a></li>
          <li><a href="#projects" className="hover:text-red-500">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contacto</a></li>
          <li>
            <a
              href="/Gisela_Spina_CV_QA_Automation.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              <FileText size={18} />
              CV
            </a>
          </li>
        </ul>

        {/* Botón menú mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white bg-black/60 backdrop-blur-sm">
          <a href="#about" className="block hover:text-red-400">Sobre mí</a>
          <a href="#tech" className="block hover:text-red-400">Tecnologías</a>
          <a href="#projects" className="block hover:text-red-400">Proyectos</a>
          <a href="#contact" className="block hover:text-red-400">Contacto</a>
          <a
              href="/Gisela_Spina_CV_QA_Automation.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              <FileText size={18} />
              CV
            </a>
        </div>
      )}
    </nav>
  );
}
