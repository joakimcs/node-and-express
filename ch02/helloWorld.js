var http = require('http');

// The http.createServer method takes a function as an argument;
// that function will be invoked every time an HTTP request is made
http.createServer(function (req, res) {
	// Set content type to plain text
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Send string 
	res.end('Hello world!')
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');