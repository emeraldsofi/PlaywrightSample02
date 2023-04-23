const {test,expect} = require('@playwright/test')
const {webContext} = require('./loginToken.spec')

test.beforeAll(async()=>{
   this.webContext = webContext()
})

test('login to create storage account',async()=>{
   const page = await webContext.newPage()
    await page.goto('https://automationexercise.com/view_cart')

    console.log("test")
    await page.locator("//a[@class = 'btn btn-default check_out']").waitFor()
    const prductNameInCart = await page.locator("//tbody//h4/a").allTextContents()

       await expect(await page.locator("//tbody//h4/a").nth(0)).toHaveText('Blue Top')
       await expect(await page.locator("//tbody//h4").nth(1)).toHaveText('Men Tshirt')
 
        
})