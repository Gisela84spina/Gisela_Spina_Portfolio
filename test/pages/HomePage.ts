import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly contactLink: Locator;
  readonly projectLinks: Locator;
  readonly projectCards: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // 1. Agarramos el primer encabezado de la página de forma segura
    this.mainHeading = page.getByRole('heading').first();
    
    // 2. Especificamos que el link de contacto está dentro de la navegación (header)
    this.contactLink = page.getByRole('navigation').getByRole('link', { name: /contacto/i });

    // 3. proyectos 
   // Captura todos los enlaces dentro de la sección de proyectos
   this.projectLinks = page.locator('#projects a');
 }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async goToContact() {
    await this.contactLink.click();
  }
}