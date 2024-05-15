const { test, expect } = require('@playwright/test');
     
 
     
     
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})

test('@Web UI Controls', async ({page})=>
 {
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator('#username').fill('rahulshettyacademy');
   await page.locator('#password').fill('learning');
   await page.locator(".checkmark").last().click();
   await page.locator('#okayBtn').click();
   await page.locator('#terms').click();
   const dropdown = page.locator('select.form-control');
   await dropdown.selectOption('consult');
   await page.locator('#signInBtn').click();
   await page.locator('[href*=documents-request]');
   
   

 })
