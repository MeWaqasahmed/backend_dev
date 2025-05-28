const fs = require("fs");

//********************************write file

//                     Sync code
// fs.writeFileSync("./text.txt", "i am learning nodejs");


//                     ASync code
// it takes an extra parameter which is a callback function

// fs.writeFile("./Async_text.txt", "i am writi ng into Async text file", (err) =>
// {
//   console.log(err);
// });


//*********************************read file

// Sync code
// const reading = fs.readFileSync("./Async_text.txt", "utf8");
// console.log(reading);

// Sync code
// fs.readFile("./Async_text.txt", "utf8" ,(error, response) =>
// {
//   if (error)
//   {
//     console.log(err)
    
//    }
//   else {
//     console.log(response)
//   }
// });
// console.log(reading2);







// ******************************//append file

// sync
// fs.appendFileSync("./Async_text.txt", " \n i am appending this line");

// async
//  fs.appendFile("./text.txt", " \n i am appending in text.txt file", (err) => {
//   if (err) {
//     console.log(err);
//   }
 
  
//  })

// fs.readFile("./text.txt", "utf8", (error, response) => {
//   if (error) {
//     console.log(err)
    
//   }
//   else {
//     res2 = response + "\n Waqas ahmed Qazi";
//     console.log(res2);
//   }
// })

//delete file
fs.unlink("text.txt", (err) => {
  console.log(err)
}) 

//rename file
//copy file
//create directory
//delete directory
//rename directory
//create file
 
