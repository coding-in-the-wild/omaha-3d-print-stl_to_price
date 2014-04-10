var http = require('http')
var fs = require('fs');

var port = 8080
var method = 'POST' //'GET'

//////////
//SERVER//
//////////
http.createServer().on('connection', function(socket) {
	console.log('connection')
	console.log('')
}).on('connect', function(req, socket, head) {
	console.log('connect')
	console.log('')
}).on('request', function (req, res) {
	console.log('request')
	console.log('')
}).on('checkContinue',  function (req, res) {
	console.log('checkContinue')
	console.log('')
}).on('upgrade', function() {
	console.log('upgrade')
	console.log('')
}).on('clientError', function() {
	console.log('clientError')
	console.log('')
}).on('close', function() {
	console.log('close')
	console.log('')
}).listen(port, function(){
	console.log("server started")
})

//////////
//CLIENT//
//////////
/*var opts = {
	port: port,
	path: 'server/stl/',
	method: 'CONNECT'
}
http.request(opts, function(res2) {
	console.log("res2")
	console.dir(res2)
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	})
}).on('error', function(e) {
	console.log('problem with request: ' + e.message);
}).end()*/
