//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, 
//a new file, containing the specified content, will be created:
//----------------------------------------------------------------------------------------------------------
//Create a new file using the writeFile() method:
//import statement 
var fs=require('fs');
fs.writeFile('mynewfile3.text','Hello kadapala',function(err){//function takes only err,because it is writeFile()
    if(err){
        console.log(err);
    }else{
        console.log("saved!");
    }
})