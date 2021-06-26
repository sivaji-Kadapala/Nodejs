const EventEmitter=require('events')
class Logger extends EventEmitter{
    log(message){
        console.log('log function',message);
        this.emit('messageLogged',{id:5,url:'http//'});
    }
}
module.exports=Logger;