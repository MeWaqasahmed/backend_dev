const eventEmitter = require("events");
const emitter = new eventEmitter();
let loginCounter = 0;
let logoutCounter = 0;
let purchaseCounter = 0;
let profileCounter = 0;
let lastProduct = '';

emitter.on("login", (name) => {
   console.log(`${name} is just logged in `);
   loginCounter++;
   
})
emitter.on("logout", (name) => {
   
   console.log(`${name} is just logged out `);
   logoutCounter++;
   
})

emitter.on("purchase", (args) => {
   
   console.log(`${args.customerName} purchased ${args.product}`);
  purchaseCounter++;
  lastProduct = args.product;
   
})
emitter.on("profile", (userName) => {
   
   console.log(`${userName} update his profile`);
   profileCounter ++;
   
})

emitter.emit("login", "waqas ahmed");
emitter.emit("login", "waqas ahmed");

emitter.emit("logout", "Qazi")
emitter.emit("logout", "Qazi")

emitter.emit("profile", "waqas ahmed")
emitter.emit("profile", "waqas ahmed")

emitter.emit("purchase", {
   customerName: "waqas ahmed",
   product: "apple"
})
emitter.emit("purchase", {
   customerName: "waqas ahmed",
   product: "apple"
})
console.log(`${loginCounter} time${loginCounter > 1 ? 's' : ''} user log in `)
console.log(`${logoutCounter} time${logoutCounter > 1 ? 's' : ''}  user logged out `)
try {
  console.log(`${purchaseCounter} time${purchaseCounter > 1 ? 's' : ''}  customer purchased ${lastProductm}`)
} catch (error) { console.log(`catch error ${error}`)}
console.log(`${profileCounter} time${profileCounter>1 ? 's': ''}  update his profile `)