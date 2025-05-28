const http = require("http");
const fs = require("fs");
const PORT = 8080;
const myserver = http.createServer((req, res) => {
  // console.log(req.rawHeaders);
  // res.end("hello from server");
  const log = `${Date.now()}  request is coming from &  ${req.url} \n `

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error(`this is an error ${err} `)
      Response.statusCode = 500;
      Response.end("internal server error")
    }
  })

})
myserver.listen(PORT, () => {
  console.log(`server is running on  port number ${PORT}`);
})
// console.log(myserver);