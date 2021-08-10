//it is not waiting for the settimeout function in between we want to  excute  setIntervals ,thats why we should use the setImmediate 
'use strict';
let x=()=>console.log('In time');
let y=()=>console.log('out time');
let t=setTimeout(y,5000);
setImmediate(()=>{setInterval(x,2000)})