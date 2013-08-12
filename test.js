var fs = require('fs');
var http = require("http");

http.createServer(function(request, response) {
	content = readFile();
	console.log(content);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);


function readFile(){
	buffer = fs.readFileSync('index.html');
	return buffer.toString("utf-8", 0, buffer.length);
}
