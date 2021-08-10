var fs=require('fs');
console.log('Starting....');
var myData=fs.readFileSync('demo.txt')
console.log(myData.toString());
console.log('ended');