const {test, expect} = require('@playwright/test');

test('Go Shopping Test', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
const dropdown = page.locator("select.form-control")
await dropdown.selectOption("consult");
await page.locator("#terms").click();
await page.locator("#signInBtn").click();
await page.locator("label:nth-child(2)").click();
await page.locator(".blinkingText");
await page.locator("#okayBtn").click();
//console.log(await page.locator(".radiotextsty")).last().isChecked();

})

test('Child windows', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    const [newpage] = Promise.all(
   [
    context.waitForEvent('page'),
    await page.locator(".blinkingText").click()
])
    



})
