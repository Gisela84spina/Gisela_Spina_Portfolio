import { test, expect } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';



  test('muestra correctamente todos sus campos (Smoke Test)', async ({ page }) => {
    const contactPage = new ContactPage(page);
    
    await contactPage.open();
    await contactPage.heading.scrollIntoViewIfNeeded();
   

    await expect(contactPage.heading).toBeVisible();
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.messageInput).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
  });

  test('muestra estado de "enviando..." y luego "mensaje enviado" con éxito', async ({ page }) => {
    // Simulamos respuesta exitosa de la API con un pequeño delay
    await page.route('**/api/contact', async route => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
    });

    const contactPage = new ContactPage(page);
    await contactPage.open();

    await contactPage.nameInput.fill('Gisela Test');
    await contactPage.emailInput.fill('gisela@test.com');
    await contactPage.messageInput.fill('Mensaje de prueba exitosa.');
    await contactPage.submitButton.click();

    // 1. Validamos estado de carga
    const loadingMessage = page.getByText(/enviando/i);
    await expect(loadingMessage).toBeVisible();

    // 2. Validamos mensaje de éxito
    const successMessage = page.getByText(/mensaje enviado/i);
    await expect(successMessage).toBeVisible();
  });

  test('muestra "hubo un error" si el servidor falla', async ({ page }) => {
    // Simulamos un error 500 del servidor
    await page.route('**/api/contact', async route => {
      await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Internal Error' }) });
    });

    const contactPage = new ContactPage(page);
    await contactPage.open();

    await contactPage.nameInput.fill('Gisela Test');
    await contactPage.emailInput.fill('gisela@test.com');
    await contactPage.messageInput.fill('Mensaje que va a fallar.');
    await contactPage.submitButton.click();

    // Validamos que aparezca el aviso de error
    const errorMessage = page.getByText(/hubo un error|error/i);
    await expect(errorMessage).toBeVisible();
  });

  test('previene el envío si hay campos vacíos o email inválido (Validación de cliente)', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.open();

    // 1. Intentar enviar con campos vacíos
    await contactPage.submitButton.click();
    
    // Verificamos que no se muestre el mensaje de éxito (el navegador bloquea el envío)
    const successMessage = page.getByText(/mensaje enviado/i);
    await expect(successMessage).not.toBeVisible();

    // 2. Intentar enviar con un email mal formado (sin @)
    await contactPage.nameInput.fill('Gisela Test');
    await contactPage.emailInput.fill('correo-sin-arroba');
    await contactPage.messageInput.fill('Probando email incorrecto.');
    await contactPage.submitButton.click();

    // Verificamos que el formulario siga sin enviarse con éxito
    await expect(successMessage).not.toBeVisible();
  });
