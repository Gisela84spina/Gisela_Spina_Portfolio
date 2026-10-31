# Portfolio de Gise 💻✨
### Developer & QA Automation

Bienvenid@ a mi portfolio personal. Desarrollo aplicaciones web funcionales, con integración de Firebase y APIs, pensadas para necesidades reales de negocio, y las pruebo con automatización para asegurar su calidad.

🌐 **[Ver portfolio en vivo](https://filotropo-dentronf.vercel.app/)**

---

## 🔥 Tecnologías

* **Frontend:** React, Vite, Tailwind CSS, Framer Motion
* **Backend:** Node.js, Nodemailer, Java 17, Spring Boot, Spring Data JPA, MySQL, Firebase
* **QA:** Playwright, TypeScript, Postman
* **Deploy:** Vercel

---

## 🚀 Proyectos destacados

### Tienda Sucule66 · e-commerce de un negocio real
Tienda online con catálogo, carrito y panel de administración desde el celular para cargar, editar y borrar productos. Los pedidos se envían por WhatsApp con el detalle de la compra. Está en uso en producción.
`React` `Vite` `Tailwind CSS` `Firebase Firestore` `Cloudinary`
[Repo](https://github.com/Gisela84spina/tienda-sucule66) · [Demo](https://tienda-sucule66.vercel.app/)

### Mostrador · sistema para un local de repuestos de motos
Registra ventas, devoluciones y gastos, calcula el resultado del día y exporta el cierre a Excel. Funciona sin conexión gracias a localStorage y guarda los productos en Firebase.
`React` `Vite` `Tailwind CSS` `Firebase Firestore`
[Repo](https://github.com/Gisela84spina/mostrador) · [Demo](https://mostrador-colombo-junin.vercel.app)

### CO2nsciente · backend con Spring Boot
Backend desarrollado durante un curso de Spring Boot y SQL. Gestiona productos por región: alta, listado, búsqueda por ID, modificación, baja lógica y filtro por región.
`Java 17` `Spring Boot` `Spring Data JPA` `MySQL` `Maven`
[Repo](https://github.com/Gisela84spina/co2nsciente-java)

El formulario de contacto de este portfolio envía correos reales con Node.js y Nodemailer.

---

## 🧪 Calidad y testing

Este portfolio tiene su propio proyecto de QA.

* **Automatización:** 8 tests con Playwright y TypeScript (Page Object Model), ejecutados en computadora y celular: 16 ejecuciones en verde.
* **Documentación:** 8 historias de usuario con criterios de aceptación, 16 reglas de negocio, 15 casos de prueba (8 automatizados y 7 manuales), reporte de errores y matriz de trazabilidad → [Ver planilla](https://docs.google.com/spreadsheets/d/112IOjPm6zlau2X993CXl8AAM2S3Hg8hBC7lyfo8GAeQ/view) · [PDF](./public/QA_TestPortfolio_sheets.pdf)
* **Resultados:** 14 casos pasaron y 1 falló. Encontré un bug real en mi propio sitio: al hacer clic varias veces seguidas en "Enviar" se mandan varios correos (BUG-01, abierto).

---

## ▶️ Cómo correrlo

    npm install
    npm run dev                  # levanta el sitio
    npx playwright test          # corre los tests
    npx playwright test --ui     # modo interactivo
    npx playwright show-report   # reporte HTML