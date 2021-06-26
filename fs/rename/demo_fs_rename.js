//The fs.rename() method renames the specified file
//-------------------------------------------------
//import statement
var fs=require('fs');
//Rename the file "mynewfile1.txt" into "myrenamedfile.txt"
fs.rename('mynewfile1.txt','myrenamefile1.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('File is Renamed!');
    }
})