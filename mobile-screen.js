var http = require('http');
var fs = require('fs');

var s = http.createServer(function (req, res) {
	var htmlPageHome = 'ok';
	res.writeHead(200, {'Content-Type': 'text/html'});

	htmlPageHome = fs.readFileSync('mobile_screen.tpl');
	res.end(htmlPageHome);
});
s.listen(80);
console.log('NODEJS corriendo! ctrl+c para detenerlo');
