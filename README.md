# Gisela Spina | Portfolio de QA Automation

[English version](README.en.md) · [Portfolio online](https://filotropo-dentronf.vercel.app) · [GitHub](https://github.com/Gisela84spina)

[![Quality Pipeline](https://github.com/Gisela84spina/Gisela_Spina_Portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/Gisela84spina/Gisela_Spina_Portfolio/actions/workflows/main.yml)

## Descripción del proyecto

Portfolio personal desarrollado con React y Vite, que incluye un formulario de contacto conectado a un backend serverless propio.

Este repositorio también demuestra mi trabajo práctico en **QA Automation**, mediante pruebas end-to-end con Playwright e integración continua con GitHub Actions.

El proyecto combina desarrollo frontend, diseño de pruebas, controles automatizados de calidad y configuración de pipelines CI en una aplicación real.

**Sitio publicado:** [filotropo-dentronf.vercel.app](https://filotropo-dentronf.vercel.app)

## Funcionalidades principales

- Navegación responsive con menú adaptado a pantallas pequeñas.
- Presentación de proyectos mediante un carrusel con enlaces directos.
- Descarga del CV en formato PDF.
- Formulario de contacto integrado con un backend propio.
- Pruebas automatizadas end-to-end de los principales recorridos de usuario.
- Pipeline de integración continua que valida calidad de código, pruebas y compilación de producción.

## Stack tecnológico

| Área | Tecnologías |
|---|---|
| Frontend | React 18, Vite 6, Tailwind CSS 3 |
| Interfaz y animaciones | Framer Motion, react-slick, Lucide React |
| Backend | Node.js, función serverless |
| Envío de correos | Resend |
| Automatización de pruebas | Playwright, TypeScript |
| Arquitectura de pruebas | Page Object Model (POM) |
| Calidad de código | ESLint 9 |
| CI/CD | GitHub Actions |
| Despliegue | Vercel |

## Arquitectura de la aplicación

```mermaid
flowchart LR
    U[Visitante] --> F[Frontend React + Vite]
    F -->|POST /api/contact| B[Backend Serverless]
    B --> R[API de correo Resend]
    R --> M[Bandeja del destinatario]
```

El formulario envía el nombre, correo electrónico y mensaje del visitante a un endpoint específico:

`https://backend-contacto.vercel.app/api/contact`

El backend (`backend/api/contact.js`) valida los campos obligatorios, el formato del correo electrónico y la longitud máxima de los datos. También restringe los orígenes permitidos mediante CORS y utiliza Resend para enviar los mensajes.

Las credenciales sensibles se administran mediante variables de entorno y no están hardcodeadas en el código fuente.

| Variable de entorno | Propósito |
|---|---|
| `RESEND_API_KEY` | Autenticación con la API de Resend |
| `CONTACT_TO` | Dirección de correo que recibe los mensajes |

El archivo `.env` está excluido mediante `.gitignore` y no se publica en el repositorio.

El frontend y las pruebas automatizadas no requieren variables de entorno.

## Estrategia de pruebas end-to-end

La suite automatizada utiliza Playwright con TypeScript para validar los principales recorridos de usuario mediante un navegador real.

**Configuración de ejecución**

| Configuración | Detalle |
|---|---|
| Navegador | Firefox |
| Proyecto escritorio | `desktop-firefox` |
| Proyecto móvil | `mobile-firefox` |
| Viewport móvil | 375 × 667 |
| Archivos de pruebas | 2 |
| Casos de prueba | 8 |
| Ejecuciones totales | 16 |
| Workers en CI | 2 |

El proyecto móvil utiliza un viewport de dimensiones reducidas para validar el comportamiento responsive. No emula un dispositivo físico, entradas táctiles ni un user agent móvil.

### Escenarios cubiertos

| Archivo | Escenario | Validación |
|---|---|---|
| `portfolio.spec.ts` | Carga del portfolio | Disponibilidad de la página, título no vacío y encabezado visible. |
| `portfolio.spec.ts` | Navegación a contacto | Navegación a la sección de contacto, incluido el menú móvil. |
| `portfolio.spec.ts` | Enlaces de proyectos | Presencia de enlaces a tres proyectos. No se verifica la disponibilidad de sus destinos. |
| `portfolio.spec.ts` | Descarga del CV | Evento de descarga, nombre del archivo y extensión PDF. |
| `contact-form.spec.ts` | Visibilidad del formulario | Título, campos y botón de envío visibles. |
| `contact-form.spec.ts` | Envío exitoso | Estado de carga y mensaje de éxito ante una respuesta HTTP 200 simulada. |
| `contact-form.spec.ts` | Error del servidor | Mensaje de error ante una respuesta HTTP 500 simulada. |
| `contact-form.spec.ts` | Validación del formulario | Validación nativa del navegador para campos obligatorios y formato de correo. |

### Aislamiento y confiabilidad de las pruebas

Las pruebas del formulario interceptan las solicitudes al backend mediante `page.route` de Playwright.

Este enfoque permite obtener ejecuciones predecibles, evita el envío de correos reales y elimina la dependencia de la disponibilidad del backend externo.

Playwright inicia automáticamente el servidor de desarrollo de Vite mediante la configuración `webServer`.

Cuando una prueba falla, se conserva su trace para facilitar el diagnóstico y se genera un reporte HTML.

## Page Object Model

La suite utiliza el patrón Page Object Model para centralizar los locators y los comportamientos específicos de cada página.

Los Page Objects están ubicados en `test/pages/`:

- **HomePage:** gestiona la página principal, el encabezado, la navegación de contacto y el acceso a esa sección.
- **ContactPage:** centraliza los locators del formulario de contacto, incluyendo título, campos y botón de envío.

Se priorizan los locators basados en roles accesibles (`getByRole`) cuando corresponde. Los campos del formulario se localizan mediante sus placeholders.

La implementación actual centraliza locators y acceso a las páginas. Algunas interacciones de varios pasos todavía permanecen dentro de los archivos de pruebas.

## Integración continua — GitHub Actions

El repositorio incluye un workflow de GitHub Actions denominado **Portfolio - Quality Pipeline**.

Archivo de configuración:

`.github/workflows/main.yml`

Se ejecuta automáticamente ante cada push y pull request dirigido a la rama `main`.

El workflow utiliza un único job, `Quality Checks`, sobre un entorno `ubuntu-latest`.

### Etapas de la pipeline

1. Checkout del repositorio.
2. Configuración de Node.js 22 con caché de dependencias npm.
3. Instalación de dependencias mediante `npm ci`.
4. Ejecución de ESLint.
5. Generación del build de producción.
6. Instalación de Firefox para Playwright.
7. Ejecución de la suite de pruebas automatizadas.
8. Publicación de reportes y traces como artifacts, incluso cuando fallan pasos anteriores.

### Controles de calidad automatizados

| Control | Comando | Objetivo |
|---|---|---|
| Análisis estático | `npm run lint` | Detectar problemas de calidad y reglas de código. |
| Build de producción | `npm run build` | Verificar que la aplicación pueda compilarse para producción. |
| Pruebas end-to-end | `npx playwright test` | Validar automáticamente los principales recorridos de usuario. |

El workflow utiliza permisos mínimos sobre el repositorio (`contents: read`) y no necesita secretos de GitHub.

### Últimos resultados verificados

La ejecución verificada finalizó correctamente:

- ESLint: aprobado.
- Playwright: 16 pruebas aprobadas.
- Build de producción: exitoso.
- Compilación: 2.046 módulos transformados.

Los tres controles de calidad finalizaron correctamente en GitHub Actions.

## Reportes y evidencias de diagnóstico

El workflow publica los reportes de Playwright y los traces como artifacts.

Para consultarlos:

1. Abrir la pestaña [Actions](https://github.com/Gisela84spina/Gisela_Spina_Portfolio/actions) del repositorio.
2. Seleccionar una ejecución del workflow.
3. Localizar la sección **Artifacts**.
4. Descargar `playwright-report-and-traces`.

Los artifacts se conservan durante 14 días.

Para abrir localmente un reporte HTML descargado:

```bash
npx playwright show-report playwright-report
```

Cuando una prueba falla, el trace correspondiente puede inspeccionarse con:

```bash
npx playwright show-trace <ruta-al-trace.zip>
```

Los traces se conservan según la política configurada en Playwright.

## Ejecución local del proyecto

### Requisitos previos

- Node.js 22
- npm
- Git

### Instalación

```bash
git clone https://github.com/Gisela84spina/Gisela_Spina_Portfolio.git

cd Gisela_Spina_Portfolio

npm ci

npx playwright install firefox
```

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run lint` | Ejecuta ESLint. |
| `npm test` | Ejecuta la suite de pruebas Playwright. |
| `npx playwright test` | Ejecuta Playwright directamente. |
| `npm run build` | Genera el build de producción. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npx playwright show-report` | Abre el último reporte HTML. |

## Decisiones técnicas

**Simulación del backend en las pruebas E2E**

La API del formulario se intercepta para mantener las pruebas deterministas, evitar el envío de correos reales y aislar el comportamiento del frontend de la disponibilidad del backend. Por lo tanto, las reglas de negocio del backend no se validan mediante esta suite.

**Estrategia de navegador único**

Se seleccionó Firefox para mantener una suite inicial enfocada y fácil de mantener. Actualmente no se incluye cobertura de Chromium ni WebKit.

**Orden de ejecución en CI**

El análisis estático y la compilación de producción se ejecutan antes de la suite end-to-end, que tiene mayor duración. Esto permite detectar primero problemas básicos.

**Instalación reproducible de dependencias**

Se utiliza `npm ci` en CI para instalar las dependencias a partir del archivo lock versionado, proporcionando instalaciones consistentes.

**Diagnóstico de fallos**

Los reportes y traces de Playwright se publican como artifacts incluso cuando fallan pasos anteriores del workflow, facilitando la investigación y resolución de problemas.

## Limitaciones conocidas y futuras mejoras

Los siguientes puntos representan limitaciones actuales y oportunidades de mejora.

### Cobertura de pruebas y CI

- Las pruebas E2E se ejecutan contra el servidor de desarrollo de Vite, no contra una versión de producción.
- El comportamiento del backend no está cubierto por pruebas automatizadas.
- Las pruebas de validación del formulario se enfocan actualmente en la validación nativa del navegador.
- La pipeline valida el frontend, pero no instala ni prueba el backend de forma independiente.
- El despliegue en Vercel es independiente del workflow de CI.
- La cobertura automatizada de navegadores está limitada actualmente a Firefox.
- El proyecto móvil valida el diseño responsive mediante un viewport, no mediante un dispositivo real.

### Aplicación

- El botón de envío no se deshabilita durante el procesamiento de una solicitud, por lo que varios clics pueden generar envíos duplicados.
- El backend todavía no implementa rate limiting ni una protección específica contra spam.
- Resend utiliza su dirección de prueba (`onboarding@resend.dev`) en lugar de un dominio propio verificado.
- Los rechazos del servidor se muestran al usuario mediante un mensaje de error genérico.

Estas limitaciones se documentan deliberadamente para dejar explícitos el alcance y la cobertura actuales.

## Autora

**Gisela Spina**

QA Automation / Developer

- [GitHub](https://github.com/Gisela84spina)
- [LinkedIn](https://www.linkedin.com/in/gisela-spina/)