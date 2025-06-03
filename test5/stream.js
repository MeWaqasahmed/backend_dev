const http = require("http");
const fs = require("fs");
const PORT = 4050;


  const myServer = http.createServer((req, res) => {
    

    // downloading files in a bad way
    
    // fs.readFile("sample.txt", (error, data) => {
      
    //   if (error) {
    //     console.log(error)
    //     res.statusCode = 500;
    //     res.end("internal server error");
    //   }
      
    //   else {
    //     res.writeHead(200, { "content-type": "text/plain" })
    //     res.end(data);
    //   }
    // });
    
    // Reading a file in a good way 

    const readStream = fs.createReadStream("sample2.txt", {highwaterMark: 16});
    const writeStream = fs.createWriteStream("sample3.txt")
    readStream.on("data", (chunked_data) => {
      writeStream.write(chunked_data);
    
    })


  
  })
  myServer.listen(PORT, () => {
    console.log(`server in listening at port ${PORT}`)
  })
