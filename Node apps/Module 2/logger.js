//module for login messages
const EventEmitter = require("events");
// const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //send an HTTP request
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

//module.exports = log;
//we are exporting only function

//module.exports.log = log;
//Here we are exporting object .It helps when we have more methods and properties

//module.exports.endPoint = url;

//Here we are exporting our function and variable
//we could change the name outside .Internally we call t url
//But when we export we call it endpoint.This is implementation Detail
