const { test, expect } = require('@playwright/test');
test('Playwright Special Locators', async({page})=> {
await page.goto('https://rahulshettyacademy.com/angularpractice/');
await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel('Employed').click();
await page.getByLabel('Gender').selectOption('Female');
await page.getByPlaceholder("Password").fill('abc123');
await page.getByRole('button', {name: 'Submit'}).click();
await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
await page.getByRole('link', {name: 'Shop'}).click();
await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole('button', {name: 'add'}).click();


})

test.only('using code', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('https://rahulshettyacademy.com/angularpractice/');
    await page.getByRole('link', { name: 'ProtoCommerce Rahul Shetty Academy https://rahulshettyacademy.com › ...' }).first().click();
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByLabel('Employed').check();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.getByRole('heading', { name: 'Samsung Note 8' }).click();
    await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' }).getByRole('button').click();
  });