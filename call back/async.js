var fs=require('fs');
console.log('Starting....');
fs.readFile('demo.txt',(err,myData) => {
    if(err)
    {
        return console.log(err);
    }
    else
    {
        console.log(myData.toString());
    }
})

console.log('ended');