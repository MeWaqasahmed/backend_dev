const path = require("path");
// console.log(path);
// console.log( __filename);
// console.log(__dirname);

const filepath = path.join("/test2", "file2", "data.txt");
// console.log(filepath);
// const parsing = path.parse(filepath);
// console.log(parsing);
const resolvePath = path.resolve(filepath);
console.log(resolvePath);