//The fs.appendFile() method appends the specified content at the end of the specified file
//----------------------------------------------------------------------------------------
//import statement
var fs=require('fs');
//append content at the end of the file
fs.appendFile('mynewfile1.txt','This is my new txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Updated!');
    }
})