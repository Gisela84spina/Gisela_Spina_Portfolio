import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para controlar la visibilidad del botón "Subir"
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Se activa al hacer scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para subir al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/dnaBackground.webm" type="video/webm" />
        Tu navegador no soporta este video.
      </video>

      {/* Superposición oscura para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del footer */}
      <div className="relative max-w-6xl mx-auto px-4 text-center text-white py-6">
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/Gisela84spina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e11d48] hover:underline mx-3 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gise-spina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e11d48] hover:underline mx-3 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:giselaspina84@outlook.com.ar"
            className="text-white hover:text-[#e11d48] hover:underline mx-3 transition duration-300"
          >
            Contacto
          </a>
        </div>

        {/* Texto derechos reservados */}
        <p className="text-sm text-gray-300 mt-4">
          © 2026 Gisela Spina. Todos los derechos reservados.
        </p>
      </div>

      {/* Botón de subir */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-[#e11d48] text-white p-4 rounded-full shadow-lg hover:bg-[#f43f5e] transition duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
