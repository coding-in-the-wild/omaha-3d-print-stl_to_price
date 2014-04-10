var exec = require('child_process').exec
var spawn = require('child_process').spawn
var md5 = require('crypto').createHash('md5')
var http = require("http")
var priceFromHash = require("./priceFromHash.js")
var stream = require("stream")
var url = require('url')

var test = require('tap').test
var fs = require('fs')
var util = require('util')
var saveAndHashFile = require('./saveAndHashFile.js')
var writePath = './stl_files/'
var ext = '.js'
var fakeHash = 'Md5HashesAre32CharactersInLength'

console.log("1")
var rStream = http.createServer(function(req, res) {
	console.log("4")
	console.log("req")
	console.dir(req)
	console.log("res")
	console.dir(res)
	console.log("5")
	
	saveAndHashFile(rStream, writePath, ext, function(err, object) {
		console.log("6")
		t.notOk(err, 'no error')
		t.equal(object.price, 5.0175780752, 'price is correct')
		t.equal(object.hash, 'd372818be56327b94ad912f903b33b2f', 'hash is correct')
		console.log("7")
	})
}).listen(8080)
console.log("2")
console.dir(rStream)
console.log("3")
//http.request() returns an instance of the http.ClientRequest class.
//The ClientRequest instance is a writable stream.
//If one needs to upload a file with a POST request,
//then write to the ClientRequest object.

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: 'server/stl/' + fakeHash,
  method: 'POST'
}

var req = http.request(options, function(res) {
	console.log("8")
	console.log("i have no idea what this means")
	res.on('data', function (chunk) {
		console.log('res BODY: ' + chunk);
		console.log("9")
	})
}).on('response', function(blah) {
	console.log("10")
	console.log("i have no idea what this means either")
})

/*

****eg****

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode)
  console.log('HEADERS: ' + JSON.stringify(res.headers))
  res.setEncoding('utf8')
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk)
  })
})

req.on('error', function(e) {
  console.log('problem with request: ' + e.message)
})

// write data to request body
req.write('data\n')
req.write('data\n')
req.end()
*/