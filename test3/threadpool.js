const crypto = require("crypto");

const start = Date.now();

for (let i = 0; i < 5; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Done in ${Date.now() - start}ms`);
  });
}
