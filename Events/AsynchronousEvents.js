// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

// Async function listening to myEvent
eventEmitter.on('myEvent', (msg) => {
	setImmediate( () => {
		console.log("Message from async: " + msg);
	});
});

// Declaring listener fun to myEvent
var fun = (msg) => {
	console.log("Message from fun: " + msg);
};

// Listening to myEvent with fun
eventEmitter.on('myEvent', fun);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");
