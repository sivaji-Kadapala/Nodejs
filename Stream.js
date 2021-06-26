//import statement
const fs=require('fs');
const readStream=fs.createReadStream('./data.txt',{encoding:'utf-8'});//buffer converted to String using {encoding:'utf-8'}
const writeStream=fs.createWriteStream('./write_data.txt');
readStream.on('data',(chunck)=>{//its taking call back
    console.log('-----------New Chunck------------------');
    console.log(chunck);
console.log('-----------New upated Chunck------------------');
writeStream.write(chunck);
})
// readStream.pipe(writeStream)