//The fs.open() method takes a "flag" as the second argument,like 'w'
// if the flag is "w" for "writing", the specified file is opened for writing.
// If the file does not exist, an empty file is created:
//----------------------------------------------------------------
//Create a new, empty file using the open() method:
//import statement
var fs=require('fs');
//Create a empty file named as mynewfile2.txt
fs.open('mynewfile2.txt','w',function(err,file){//The err parameter contains error information if any. The data parameter contains the content of the specified file.
    if(err){
        console.log(err);
    }else{
        //empty file is created 
        console.log('saved');
    }
})