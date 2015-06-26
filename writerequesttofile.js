var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("writestream.txt")
    request.pipe(newFile); // echo's request to file

  request.on('end', function(){
     response.end('uploaded!');
  });
}).listen(8080);