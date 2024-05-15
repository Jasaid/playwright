const {test, expect} = require('@playwright/test');

test('Shoping', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("jorgesaid.st@gmail.com");
await page.locator ("#userPassword").fill("Vuq87era");
await page.locator("#login").click();
//await page.waitForLoadState("networkidle");
await page.locator(".card-body").first().waitFor();
const titles = await page.locator(".card-body").allTextContents();
console.log(titles);

})

test('UI Test', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
const dropdown = page.locator("select.form-control")
await dropdown.selectOption("consult");
await page.locator("#signInBtn").click();
await page.locator("label:nth-child(2)").click();
await page.locator("#terms").click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());

})