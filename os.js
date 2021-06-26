//find out the memory details of system
//import os module
const os=require('os');// 'os' is npm modules, that’s why we imported without ./
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
console.log('Total memory',totalMemory);
console.log(`free memory is ${freeMemory} `);//Template String