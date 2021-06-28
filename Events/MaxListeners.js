var events=require('events');
var em1 = new events.EventEmitter();
var em2= new events.EventEmitter();
em1.setMaxListeners(1)
console.log(em1.listeners('myEvent'));
  console.log(em1.listenerCount('myEvent'));
console.log('em1:',em1.getMaxListeners());
console.log('em2:',em2.getMaxListeners());