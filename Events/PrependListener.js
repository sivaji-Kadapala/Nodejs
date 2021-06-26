var EventEmitter = require('events').EventEmitter;

// var emitter = new EventEmitter();

// emitter.on('sayHello', () => {
//  console.log('Hello Visitor');
// });

// emitter.emit('sayHello');

// console.log('Prepended another listener function to the event "sayHello"');


// emitter.prependListener('sayHello', (stream) => {
//  console.log('Good Morning!!!!!!!');
// });

// emitter.emit('sayHello');
//By default, event listeners are invoked in the order they are added. 
//The emitter.prependListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.
// Prepend a listener function to the beginning of the array for the event named eventName.
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');