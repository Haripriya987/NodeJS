const path = require("path");
//path is built in module
//It is an object with bunch of useful methods

var pathObj = path.parse(__filename);
console.log(pathObj);
