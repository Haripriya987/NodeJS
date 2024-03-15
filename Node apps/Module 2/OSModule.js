const os = require("os");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.totalmem());

//Template String
//ES6 /ES2015 feature
console.log(`Free memory: ${os.freemem()}`);
