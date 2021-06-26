var fs = require('fs');
//fs.readFileSync(‘File Name’);
//fs.readFileSync() returns the Buffer Data.
var data = fs.readFileSync('dummyfile.txt', 'utf8');
console.log(data);