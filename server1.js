const http = require("http");
const fs = require("fs")
const PORT = 3000;
const myserver = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {

    if (err) {
      console.error(err);
      res.statusCode = 404;
      res.end("file not found");
      
    }
    else {
      console.log("i am a server")
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    }
 })

})
myserver.listen(PORT, () => {
  console.log(`server is running on  port number ${PORT}`);
})
