const {test, expect} = require('@playwright/test');
 
 test('Find First Product', async ({browser})=>

{
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click({timeout:10000});
    await page.locator("xpath=//a[text()='iphone X']").click({timeout:10000});
    await page.locator("xpath=//a[()='Samsung Note 8']").click;
    
    
    })

