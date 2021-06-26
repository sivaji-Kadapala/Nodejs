//find out file directories
const fs=require('fs');
//Synchronous dont need call back function ,it does not hande the errors
//it returns which files are present in this directory
var files=fs.readdirSync('../');
console.log(files);

//Asynchronous:-first is path,last is call back function-it handle the errors
fs.readdir('./',(err,files)=>{//$ is error,./ instead of i wrote $
    if(err){
        console.log(err);
    }
    else{
        console.log(files);
    }
})
fs.readFile('./demo.txt',(err,data)=>{//The data will come in buffers,In this time iam using the toString
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
//write the file
fs.writeFile('./write.txt','Hello Sivaji',()=>{
    console.log('file was written');
});
//creating new file
fs.writeFile('./test.txt','Hello Sivaji',()=>{
    console.log('job is done');
});
//folder creating,its printed first only ,why because it is asynchronous
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("folder is created");
//     }
// })
//exist method,it checks exists or not

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("folder is created");
    }
})
}else{
    fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("folder is deleted");
    }
})
}
