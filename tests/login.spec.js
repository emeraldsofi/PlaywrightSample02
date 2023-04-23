const {test,expect} = require("@playwright/test")

test("test login for valid credentials",async function({browser}){

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://automationexercise.com/')
    //await page.pause()
await  expect(page).toHaveTitle("Automation Exercise")

await page.locator("a[href*='login']").click()
await page.locator("form[action*='login'] input[name='email'][data-qa*='email']").type('test@testautomation1.com')

await page.locator("form[action*='login'] input[name='password'][data-qa*='password']").type('test')
await page.locator("form[action*='login'] button[data-qa*='login']").click()
await expect(page.locator("a[href*='logout']")).toContainText("Logout")
await expect(page.locator("text=Logged in as")).toContainText("Logged in as")
})

test("login with incorrect credentials", async function({page}){
    await page.goto('https://automationexercise.com/')
    await page.locator("//*[@class ='fa fa-home']/parent::a").waitFor()
    await expect(page.locator("//*[@class ='fa fa-home']/parent::a")).toContainText("Home")
    await page.locator("a[href*='login']").click()
    await expect(page.locator(".login-form h2")).toContainText("Login to your account")
    await page.locator("form[action*='login'] input[name='email'][data-qa*='email']").type('test123@testautomation1.com')

await page.locator("form[action*='login'] input[name='password'][data-qa*='password']").type('test12')
await page.locator("form[action*='login'] button[data-qa*='login']").click()
await expect(page.locator("[action*='login'] p")).toHaveText("Your email or password is incorrect!")
await expect(page.locator("[action*='login'] p")).toBeVisible

})