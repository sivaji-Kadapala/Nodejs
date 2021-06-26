//The fs.unlink() method deletes the specified file
//-------------------------------------------------
//import statement
var fs=require('fs')
//Delete the file mynewfile2.txt
fs.unlink('mynewfile2.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Deleted!');
    }
})