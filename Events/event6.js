var emitter = require('events').EventEmitter;

var em = new emitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

em.on('eventOne', c1); // Register for eventOne
em.on('eventOne', c2); // Register for eventOne