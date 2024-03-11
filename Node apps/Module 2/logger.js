//module for login messages .we can use in different parts of application
var url = "http://mylogger.io/log";
function log(message) {
  //send an HTTP request
  console.log(message);
}

module.exports = log;
//we are exporting only function

//module.exports.log = log;
//Here we are exporting object .It helps when we have more methods and properties

//module.exports.endPoint = url;

//Here we are exporting our function and variable
//we could change the name outside .Internally we call t url
//But when we export we call it endpoint.This is implementation Detail
