const {test} = require('@playwright/test');
test('First Playwright test',async ({browser})=>
{
const context = await browser.newContext (); 
const page = await context.newPage ();
const userName = page.locator('#username');
const signIn = page.locator('[id="signInBtn"]');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css
await page.locator('#username').fill('rahulshettyacademy');
await page.locator('[type="password"]').fill('learning');
await signIn.click;
console.log(await page.locator("[style*=none]").textContent());
await userName.fill("");
await userName.fill("rahulshettyacademy");


});