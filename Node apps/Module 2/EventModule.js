const EventEmitter = require("events");
// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

logger.log("message");

//Making a noise ,produce => signaling an event

//Raise :logging (data:message)
