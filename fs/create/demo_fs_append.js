//import statement
var fs = require('fs');

//create a file named mynewfile1.txt:
//and add the text into "Hello Sivaji"
// If the file does not exist, the file will be created:
fs.appendFile('mynewfile1.txt', 'Hello Sivaji!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});