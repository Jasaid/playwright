const {test,expect} = require("@playwright/test");

test("Validate that login is successful with correct test data", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  expect(await page.getByText("Swag Labs")).toBeVisible();
  await page.locator("[data-test='username']").fill("standard_user");
  await page.locator("[data-test='password']").fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText("Products")).toBeVisible();
});

test('Browser Context Playwright test', async ({Browser}));

{
  const context = await browser.newContext();
  const page = await page.newContext();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  //css locator
  page.locator('#username').fill('rahulshetty');
  page.locator("['typepassword']").type('learning');

}