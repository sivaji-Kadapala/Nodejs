var http = require('http');
  
var options = {
    host: 'sivaji',
    path: '/courses',
    method: 'GET'
};
  
// Making a get request to 

http.request(options, (response) => {
  
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
    //Add Header
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write('Hello World!');
}).end();