//find the path of the module
//import path module
const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);