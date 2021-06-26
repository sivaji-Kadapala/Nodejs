var path = require('path');
console.log("-------------------------------------1-------------------------------------");
//The path.basename() method returns the filename part of a file path.
console.log("path.basename() \n",path.basename('/Users/Refsnes/demo_path.js'));
console.log("-------------------------------------2-------------------------------------");
//The path.delimiter property returns the delimiter specified for the server
//; (semicolon) for Windows,
//: (colon) for POSIX
console.log("path.delimiter \n",path.delimiter);
console.log("-------------------------------------3-------------------------------------");
//The path.dirname() method returns the directories of a file path.
console.log("path.dirname() \n",path.dirname('/Users/Refsnes/demo_path.js'));
console.log("-------------------------------------4-------------------------------------");
//The path.extname() method returns the extension of a file path.
console.log("path.extname() \n",path.extname('/Users/Refsnes/demo_path.js'));
console.log("-------------------------------------5-------------------------------------");
//The path.format() method formats a path object into a path string.
//Create a path object:
var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
//Format the path object into a path string:
var p = path.format(obj);
console.log(p);
console.log("-------------------------------------6-------------------------------------");
//The path.isAbsolute() method returns true if the specified path is an absolute path, otherwise false.
console.log(path.isAbsolute('/test/demo_path.js')); 
console.log(path.isAbsolute('test/demo_path.js')); 
console.log(path.isAbsolute('C:\\test\\demo_path.js'));
console.log("-------------------------------------7-------------------------------------");
//The path.join() method joins the specified path segments into one path.The specified path segments must be strings, separated by comma.
console.log("path.join() \n",path.join('Users', 'Refsnes', 'demo_path.js'));
console.log("-------------------------------------8-------------------------------------");
//The path.normalize() method resolves the specified path, fixing '..','\\\\' etc.
console.log("path.normalize() \n",path.normalize('Users/Refsnes/../Jackson'));
console.log("-------------------------------------9-------------------------------------");
//Formats a path string into a path object
console.log("path.parse() \n",path.parse('C:\\path\\dir\\file.txt'));
console.log("-------------------------------------10-------------------------------------");
//Returns an object containing POSIX specific properties and methods
// console.log("path.parse() \n",path.posix({name:"sivaji",age:30}));
console.log("-------------------------------------11-------------------------------------");
//Returns the relative path from one specified path to another specified path
console.log("path.relative() \n",path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
console.log("-------------------------------------12-------------------------------------");
//Resolves the specified paths into an absolute path
// If the current working directory is /Node Js,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
console.log(",path.resolve() \n",path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
console.log("-------------------------------------13-------------------------------------");
//Returns the segment separator specified for the platform
// Provides the platform-specific path segment separator:

// \ on Windows
// / on POSIX
console.log("path.sep() \n",'foo\\bar\\baz'.split(path.sep));
console.log("-------------------------------------14-------------------------------------");
//Returns an object containing Windows specific properties and methods

// console.log("path.relative() \n",path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));


console.log("-------------------------------------15-------------------------------------");
console.log("path.win32() \n",path.win32);