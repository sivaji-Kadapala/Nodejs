'use strict';
console.log(__filename);
console.log(__dirname);
let x=()=>console.log("time out method");
setTimeout(x,5000);
setInterval(x,2000);
let t=setTimeout(x,1000);
clearTimeout(t);