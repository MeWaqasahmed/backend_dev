const eventEmitter = require("events");
const emitter = new eventEmitter();

emitter.on("login", (name) => {
   let counter = 0;
   console.log(`${name} is just logged in `);
   counter += counter;
   console.log(`${counter} times user log in `)
})
emitter.on("logout", (name) => {
   let counter = 0;
   console.log(`${name} is just logged out `);
   counter += counter;
   console.log(`${counter} times user logged out `)
})

emitter.on("purchase", (args) => {
   let counter = 0;
   console.log(`${args.customerName} purchased ${args.product}`);
   counter += counter;
   console.log(`${counter} times customer purchased ${args.product} `)
})
emitter.on("Profile", (userName) => {
   let counter = 0;
   console.log(`${userName} update his profile`);
   counter += counter;
   console.log(`${counter} times user update his profile `)
})

emitter.emit("login", "waqas ahmed");
emitter.emit("logout", "Qazi")
emitter.emit("Profile", "waqas ahmed")
emitter.emit("Profile", "waqas ahmed")

emitter.emit("purchase", {
   customerName: "waqas ahmed",
   product: "apple"
})
