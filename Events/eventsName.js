// Importing events
const EventEmitter = require('events');
// Returns an array listing the events for which the emitter has registered listeners.
var emitter= new EventEmitter();
emitter.on('foo', () => {});
emitter.on('bar', () => {});
// emitter.on(Symbol('test'), () => {});
// emitter.on(['foo', Symbol('test2')], () => {});

console.log(emitter.eventNames());
// Prints: [ 'bar', 'foo', [ 'foo', Symbol(test2) ], [ 'foo', Symbol(test2) ] ]
