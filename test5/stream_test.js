const fs = require("fs");

  
const readStream = fs.createReadStream("sample2.txt");
const writeStream = fs.createWriteStream("sample3.txt");
  readStream.pipe(writeStream);

  readStream.on("data", (chunk) => {
    
    // console.log(chunk.toString());
    console.log(chunk);
  })


  


