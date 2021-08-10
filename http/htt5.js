var http=require('http')
http.createServer(function(req,res) {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('Hello Test Yanta')
    res.write(req.url);
    res.end();
}).listen(8000);