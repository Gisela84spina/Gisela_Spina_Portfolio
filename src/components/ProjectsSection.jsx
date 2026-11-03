
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "Sucule66",
      description: "E-commerce desarrollado para un cliente real, con gestión dinámica de productos mediante Firebase y panel de administración mobile-first. Permite administrar el catálogo y concretar ventas a través de un flujo optimizado que integra carrito de compras y envío directo del pedido por WhatsApp, adaptado a negocios locales.",
      githubUrl: "https://github.com/Gisela84spina/tienda-sucule66",
      liveUrl: "https://tienda-sucule66.vercel.app/",
      imageUrl: "/sucule.png",
    },
    {
      title: "Mostrador de repuestos de motos",
      description: "Aplicación web de ventas en mostrador para un negocio real, con registro de ventas, devoluciones y gastos, y cálculo automático del resultado diario. Funciona offline con almacenamiento local y permite exportar el cierre de caja a Excel.",
      githubUrl: "https://github.com/Gisela84spina/mostrador",
      liveUrl: "https://mostrador-colombo-junin.vercel.app/",
      imageUrl: "/mostrador_colombo.png",
    },
    {
      title: "Co2nsciente",
      description: "API REST desarrollada con Java, Spring Boot y Spring Data JPA, con persistencia en MySQL. Implementa operaciones CRUD, eliminación lógica y filtrado de productos por región.",
      githubUrl: "https://github.com/Gisela84spina/co2nsciente-java",
      liveUrl: "",
      imageUrl: "/co2nsciente.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gradient-to-b from-[#0f172a] via-[#0f766e] to-black"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Mis Proyectos
      </h2>
      <ProjectsCarousel proyectos={proyectos} />
    </section>
  );
};

export default ProjectsSection;