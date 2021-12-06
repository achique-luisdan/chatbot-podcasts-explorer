import { test, expect } from '@playwright/test';

//require ('dotenv').config ();

let URL_ROOT = 'https://podcasts.google.com/'

test('Listar Podcasts', async ({ page }) => {
  await page.goto(URL_ROOT)
  await page.fill('[aria-label="Buscar podcasts"]', 'Desarrollo Web')
  await page.click('[aria-label="Búsqueda"]') 
  //await page.screenshot({path: 'screenshot.png'});
  await page.pause();
});