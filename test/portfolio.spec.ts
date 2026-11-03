import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('el portfolio carga correctamente y muestra el título principal', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle(/.+/);
  await expect(homePage.mainHeading).toBeVisible();
});

test('navega a la sección de contacto desde el home', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  // Manejo del menú hamburguesa en mobile
const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });

if (await hamburgerButton.isVisible()) {
  await hamburgerButton.click();
}

  // 2. Ejecutamos la navegación a contacto mediante el Page Object
  await homePage.goToContact();

  // 3. Validamos que la URL o la sección de contacto respondan correctamente
  await expect(page).toHaveURL(/.*contact/i);
});

test('la sección de proyectos muestra los enlaces clave de GitHub y Live Demos', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  // Como el carrusel duplica elementos (clones para el loop), 
  // validamos que cada proyecto clave tenga sus enlaces visibles en pantalla
  await expect(page.locator('#projects a[href*="tienda-sucule66"]').first()).toBeVisible();
  await expect(page.locator('#projects a[href*="mostrador-colombo-junin"]').first()).toBeVisible();
  await expect(page.locator('#projects a[href*="co2nsciente-java"]').first()).toBeVisible();
});


test('permite descargar el CV correctamente', async ({ page }) => {
    await page.goto('/');
  
    // 1. Manejo del menú hamburguesa si estamos en pantalla chica
    const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });

if (await hamburgerButton.isVisible()) {
  await hamburgerButton.click();
}
  
    // 2. Localizamos el botón del CV usando los selectores nativos de Playwright (sin errores de sintaxis)
    const cvButton = page.getByRole('link', { name: /cv|curriculum|descargar/i }).first();
    await cvButton.scrollIntoViewIfNeeded();
    await expect(cvButton).toBeVisible();
  
    // 3. Interceptamos el evento de descarga de Playwright
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      cvButton.click()
    ]);
  
    // 4. Validaciones del archivo descargado
    const fileName = download.suggestedFilename();
    expect(fileName).toBeTruthy();
    expect(fileName).toMatch(/\.pdf$/i);
  });