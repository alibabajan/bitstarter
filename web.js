var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	content = readFile();
	console.log(content);
  response.send('Hello World! 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readFile(){
	buffer = fs.readFileSync('index.html');
	return buffer.toString("utf-8", 0, buffer.length);
}
