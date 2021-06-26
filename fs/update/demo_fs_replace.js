//The fs.writeFile() method replaces the specified file and content
//-------------------------------------------------------------
//import the statement
var fs=require('fs')
//
fs.writeFile('mynewfile2.txt','This is the new txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Replaced!');
    }
})