const fs = require("fs");
const http = require("http");
const PORT = 8080;
const myServer = http.createServer((req, res) => {

  res.writeHead(200, { "content-type": "text/plain" })

  
  const readStream = fs.createReadStream("sample2.txt");
  // const writeStream = fs.createWriteStream("sample3.txt");
    readStream.pipe(res);
  
    readStream.on("data", (chunk) => {
      console.log(chunk);
    })
})
myServer.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})

  


  


