

import { useState } from "react";
import { motion } from "framer-motion";
import { SiTailwindcss, SiVite, SiSpringboot, SiMysql, SiPostman } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";

const techs = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Playwright", icon: <span className="text-5xl">🎭</span> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Jira", icon: <span className="text-5xl">📋</span> },
];

function MeAndTech() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative py-20 px-6 bg-black text-white">
      {/* Fondo en caso de que el video tarde en cargar */}
      {!videoReady && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0" />
      )}

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        src="/dnaBackground.webm"
      />
      {/* Capa de blur encima del video */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0" />

      {/* CONTENIDO: SOBRE MÍ */}
      <div id="about" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 pb-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:w-2/3 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:bg-red-500 after:w-16 after:mt-2">
            Sobre mi
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            QA Automation - Software Dev
            
            <br /><br />
        
            De la gestión comercial a la calidad de software.

           <br /><br />

          
           De padres comerciantes, mi experiencia laboral se inicia a una
            edad muy temprana gestionando diferentes
            rubros de comercios, lo que me generó una capacidad natural
            para entender las necesidades reales del usuario, detectar
            fallas en los procesos y trabajar con autonomía bajo objetivos claros.
            <br />Desde 2022 comienza mi formación continua en el sector IT,
             combinando el desarrollo web (React, Node.js, Java, Spring Boot)
              con el Testing y la Automatización de
               Calidad (QA).
            </p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative text-red-500 italic mt-8 text-lg"
          >
            <span className="absolute text-5xl text-white/10 -left-6 -top-4 select-none">“</span>
            Mi objetivo es aportar un perfil integral: no solo diseño
             e implemento pruebas automatizadas (Playwright, Postman,
              SQL, Swagger), sino que entiendo el código fuente por 
              dentro, lo que me permite colaborar a la par de los equipos
               de desarrollo para entregar un software robusto y libre de fallas.
            <span className="absolute text-5xl text-white/10 -right-6 -bottom-4 select-none">”</span>
          </motion.blockquote>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center gap-8">
          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg shadow-red-500/30 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: true }}
          >
            <img
              src="/gise.jpg"
              alt="Retrato profesional de Gise Spina"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-500 animate-shine rounded-full"></div>
          </motion.div>

        </div>
      </div>

      {/* CONTENIDO: TECNOLOGÍAS */}
      <div id="tech" className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-xl shadow hover:scale-105 transition transform backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeAndTech;
