const Logger=require('./logger')
const logger=new Logger();
logger.addListener('messageLogged',(args)=>{
    console.log('listener called',args);
})
logger.log('Sivaji Kadapala')