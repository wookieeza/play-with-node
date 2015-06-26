var fs = require('fs');

var file = fs.createReadStream("index.html");
var newFile = fs.createWriteStream('index_copy.html')

file.pipe(newFile);