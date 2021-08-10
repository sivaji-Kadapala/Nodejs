//load event module
//EventEmitter is a clASS,it contain bunch of properties
const EventEmitter=require('events');
//object
const emitter=new EventEmitter();
//register a event
emitter.on('messageLogged',(arg) => {//e,event
    console.log("Listener called",arg)
})
//Raise an event
emitter.emit('messageLogged',{id:1,url:"http://"});
//emit:-making a noise