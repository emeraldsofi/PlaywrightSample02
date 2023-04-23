class APIUtils{
  
    constructor(apiContext,loginPayLoad){
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad

    }
   async getToken(){
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    data:this.loginPayLoad
}) 
//expect(loginResponse.ok()).toBeTruthy()
const loginJsonResponse = await loginResponse.json()
 const token = await loginJsonResponse.token;
console.log("token"+token)
return token
    }

    async createOrder(createPayload){
        const loginToken = await this.getToken()
        console.log("log"+loginToken)
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      
{
    data: createPayload,
    headers:{
        "Authorization": loginToken,
        "Content-Type": "application/json"
    }
})
let orderID

const orderResponseJson = await orderResponse.json()
console.log("order"+orderResponseJson)
orderID = orderResponseJson.orders[0]
return orderID
    }
}

module.exports = {APIUtils}