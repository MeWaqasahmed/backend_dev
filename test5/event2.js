const eventEmitter = require("events");
const fs = require("fs");
const emitter = new eventEmitter();
const user = {
   loginCounter : 0,
   logoutCounter : 0,
   purchaseCounter : 0,
   profileCounter : 0
}
let lastProduct = '';
try {
  const logFile = "eventlog.json";
  
  if (fs.existsSync(logFile))
  { 
    const data = fs.readFileSync(logFile, "utf-8")
    Object.assign(user, JSON.parse(data))
  };


  function saveCounts() {
    fs.writeFileSync(logFile, JSON.stringify(user), null, 2);
  }



  emitter.on("login", (name) => {
    console.log(`${name} is just logged in `);
    user.loginCounter++;
    saveCounts();
   
  })

  emitter.on("logout", (name) => {
    console.log(`${name} is just logged out `);
    user.logoutCounter++;
    saveCounts();
   
  })

  emitter.on("purchase", (args) => {
    console.log(`${args.customerName} purchased ${args.product}`);
   user.purchaseCounter++;
    lastProduct = args.product;
    saveCounts();
   
  })

  emitter.on("profile", (userName) => {
    console.log(`${userName} update his profile`);
    user.profileCounter++;
    saveCounts();
   
  })


  emitter.on("summary", () => {
    console.log(`Summary of user activity:`);
    
    console.log(`${user.loginCounter} time${user.loginCounter > 1 ? 's' : ''} user log in `)
    console.log(`${user.logoutCounter} time${user.logoutCounter > 1 ? 's' : ''}  user logged out `)
    console.log(`${user.purchaseCounter} time${user.purchaseCounter > 1 ? 's' : ''}  customer purchased ${lastProduct}`)
    console.log(`${user.profileCounter} time${user.profileCounter > 1 ? 's' : ''}  update his profile `)
    saveCounts();
  })
  
  emitter.emit("login", "waqas ahmed");
  emitter.emit("logout", "Qazi")
  emitter.emit("profile", "waqas ahmed")
  emitter.emit("purchase", {
    customerName: "waqas ahmed",
    product: "apple"
  
  })
  emitter.emit("summary")
} catch (error) {
  console.log(error)
}