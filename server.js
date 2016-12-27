var http = require('http');

var argv = process.argv;

var message = "hello " + argv[2];

var server = http.createServer(function (req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end(message);
});

server.listen(8000, function(){
	if(argv[2]) {
		process.stdout.write(`Hello ${argv[2]}\n`);
		console.log('listening on port 8000');
	} else {
		console.log('missing argument. Please enter your name: eg - node server Bob');
		server.close();
	}
	
});