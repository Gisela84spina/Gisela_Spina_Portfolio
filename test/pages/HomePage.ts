import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mainHeading = page.getByRole('heading').first();

    this.contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: /contacto/i });
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async goToContact() {
    await this.contactLink.click();
  }
}