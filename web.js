var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(readFile());
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readFile(){
	buffer = fs.readFileSync('index.html');
	return buffer.toString("utf-8", 0, buffer.length);
}
