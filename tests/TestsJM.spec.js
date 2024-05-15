const {test} = require('@playwright/test')
test ('test 3', async ({ page })=> {

    // Open Mercado Libre Colombia Page
const cardTitles = page.locator(".ui-search-item__title");
await page.goto('https://www.mercadolibre.com.co');
await page.locator('input[id="cb1-edit"]').fill('Iphone');
await page.locator('.nav-icon-search').click();
//await page.locator(".ui-search-item__title").nth(0).textContent();
//await page.locator(".ui-search-item__title").nth(1).textContent();
await page.waitForLoadState('networkidle');
console.log(await cardTitles.nth(0).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

})

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/?gws_rd=ssl');
    await page.frameLocator('iframe[name="callout"]').getByLabel('No acceder').click();
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('rahul shetty');
    await page.getByText('academy locators practice').click();
    await page.getByRole('link', { name: 'Rahul Shetty Academy - Login page Rahul Shetty Academy https://rahulshettyacademy.com › ...' }).click();
  });