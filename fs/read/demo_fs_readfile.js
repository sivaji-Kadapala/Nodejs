//Use fs.readFile() method to read the physical file asynchronously.
   
//import the statement
var fs = require('fs');
//readFile() is used to read the file
fs.readFile('TestFile.txt', function (err, data) {
                    if (err){
                        console.log(err);
                    }else{
                          console.log(data);
                    }

  
});