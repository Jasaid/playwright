const {test, expect} = require('@playwright/test');

test('Find page', async ({browser})=>
{
const context = await browser.newContext();
const page =  await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title())
await page.locator("input#username").fill("rahulshetty");
await page.locator("#password").fill("learning");
await page.locator("#signInBtn").click();
console.log(await page.locator("[style*=block]").textContent());

})

test('Page Playwright test', async ({page})=>
{
await page.goto("https://www.google.com/");
console.log(await page.title());
await expect (page).toHaveTitle("Google");

})

test ('Entrar con pasword correcto', async({page})=>

{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
await page.locator("#signInBtn").click();
await page.locator("//a[normalize-space()='iphone X']");
console.log(await page.locator("//a[normalize-space()='iphone X']").textContent());
console.log(await page.locator (".card-body a").nth(1).textContent());
console.log(await page.locator (".card-body a").allTextContents());
console.log(await page.locator("//app-card[1]//div[1]//div[1]//h5[1]").textContent());

})
