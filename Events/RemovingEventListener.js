// Importing events
const EventEmitter = require('events');
  
// Initializing event emitter instances 
const eventEmitter = new EventEmitter();
   
const fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};
   
const fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};
  
// Registering fun1 and fun2
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);
//The 'removeListener' event is emitted after the listener is removed.;

   
// Removing listener fun1 that was

eventEmitter.removeListener('myEvent', fun1);//Alias for emitter.off()
   
// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");
  
// Removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');
  
// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");