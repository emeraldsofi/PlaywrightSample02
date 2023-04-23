const {test,expect,request} = require('@playwright/test')
const {APIUtils} = require('./utils/APIUtils')
const loginPayLoad = {userEmail: "test1@testautomation1.com", userPassword: "Pass@1234"}
const createOrderPayLoad = {orders: [{country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]}
let token
let orderID
let apiContext
test.beforeAll( async ()=>{

apiContext = await request.newContext()




})
test("Api Test 01",async({page})=>{
    const apiUtils = new APIUtils(apiContext,loginPayLoad)
    token=await apiUtils.getToken()
    console.log("Added Token"+token)
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    },token)
  //  await page.pause()
  let orderIDMatch;
 orderID =  await apiUtils.createOrder(createOrderPayLoad)
   await page.goto('https://rahulshettyacademy.com/client/')
   await page.locator("[routerLink*='orders']").click()
   const rowCount = await page.locator("//tbody//tr/th")
   for(let i=0;i<await rowCount.count();i++){
   let constText = await rowCount.nth(i).textContent()
    if(constText == orderID){
        orderIDMatch = true;
        expect(orderIDMatch).toBeTruthy()
        break;
    }
    orderIDMatch = false;

   }
   console.log("orderidmatch"+orderIDMatch)
  
   await page.pause()
    })
