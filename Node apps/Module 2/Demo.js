//These all are global objects
console.log();

setTimeout();
clearTimeout();

setInterval();
clearInterval();

window.console.log();

var message = "Hello";
//global.setTimeout();
console.log(global.message); //we get as undefined
//variables and functions defined here they are not added to global object
