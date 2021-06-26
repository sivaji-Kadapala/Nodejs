var events = require("events");
var emitter = new events.EventEmitter();
var name = "Sivaji";
var surName = "";

//an event listener
// It is used just like the addListener() and on() methods, but allows for responding to the event only once. 
emitter.once("full name is", function(name, surName) {
  console.log("Added name and surname  is" + name + "  " + surName);
});
//Raising first time
emitter.emit("full name is", name, surName);
//Raising second time
emitter.emit("full name is", name, surName);