const {test,expect} = require('@playwright/test')
 test('tokenGeneration',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://automationexercise.com/')
    //await page.pause()
await  expect(page).toHaveTitle("Automation Exercise")

await page.locator("a[href*='login']").click()
await page.locator("form[action*='login'] input[name='email'][data-qa*='email']").type('test@testautomation1.com')

await page.locator("form[action*='login'] input[name='password'][data-qa*='password']").type('test')
await page.locator("form[action*='login'] button[data-qa*='login']").click()
await page.waitForLoadState('networkidle',{timeout:60000})
await page.locator("a[href*='logout']").waitFor()
await expect(page.locator("a[href*='logout']")).toContainText("Logout")
await expect(page.locator("text=Logged in as")).toContainText("Logged in as")
await context.storageState({path: 'state.json'})
const webContext = await browser.newContext({storageState:'state.json'})
})

//cls
//module.exports = {webContext}
