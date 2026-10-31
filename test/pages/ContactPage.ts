import { type Page, type Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Contacto' });
    this.nameInput = page.getByPlaceholder('Tu nombre');
    this.emailInput = page.getByPlaceholder('Tu email');
    this.messageInput = page.getByPlaceholder('Tu mensaje');
    this.submitButton = page.getByRole('button', { name: 'Enviar' });
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'commit' });
  }
}