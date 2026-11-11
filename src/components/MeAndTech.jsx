import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiTypescript,
  SiSwagger,
  SiGithubactions,
  SiJira,
  SiFirebase,
  SiGithub,
  SiEslint,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaTools,
} from "react-icons/fa";


const techGroups = [
  {
    title: "QA Automation & API Testing",
    technologies: [
      { name: "Playwright", icon: <span>🎭</span> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Swagger", icon: <SiSwagger className="text-green-500" /> },
      { name: "Jira", icon: <SiJira className="text-blue-400" /> },
    ],
  },
  {
    title: "CI/CD & Herramientas",
    technologies: [
      { name: "GitHub Actions", icon: <SiGithubactions className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "ESLint", icon: <SiEslint className="text-purple-400" /> },
      { name: "MySQL Workbench", icon: <FaTools className="text-blue-300" /> },
    ],
  },
  {
    title: "Frontend Development",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend & Bases de datos",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
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
        
            Mi trayectoria combina experiencia en gestión comercial y operativa
  con formación y desarrollo de proyectos en el sector IT.


           <br /><br />

           Trabajo en automatización de pruebas E2E con Playwright y TypeScript,
  testing de APIs con Postman y desarrollo de aplicaciones web y APIs REST
  utilizando React, Node.js, Java y Spring Boot.

            <br /> Integro prácticas de calidad desde el desarrollo:
             diseño de escenarios de prueba, validación de funcionalidades
              y análisis de resultados. En mi portfolio implementé un
               pipeline CI/CD con GitHub Actions para ejecutar controles 
               de calidad y pruebas automatizadas.
            </p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative text-red-500 italic mt-8 text-lg"
          >
            <span className="absolute text-5xl text-white/10 -left-6 -top-4 select-none">“</span>
            Entiendo la calidad de software como un proceso que combina
  criterio técnico, automatización y conocimiento del desarrollo.
  Mi objetivo es construir soluciones confiables y aportar valor
  a lo largo del ciclo de vida del software.
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
     
<div id="tech" className="relative z-10 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold mb-12 text-center">
    Tecnologías y herramientas
  </h2>

  <div className="space-y-12">
    {techGroups.map((group, groupIndex) => (
      <div key={group.title}>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-red-400 text-center">
          {group.title}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2">
          {group.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-3
                bg-white/10 p-6 rounded-xl shadow
                hover:scale-105 hover:bg-white/15
                transition transform backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">
                {tech.icon}
              </div>

              <p className="text-sm text-center font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default MeAndTech;
