var exec = require('child_process').exec
var spawn = require('child_process').spawn
var md5 = require('crypto').createHash('md5')
var fs = require('fs')
var http = require("http")
var priceFromHash = require("./priceFromHash.js")
var stream = require("stream")
var url = require('url')
var saveAndHashFile = require('./saveAndHashFile.js')

module.exports = function getStl(callback) {
	var FILE_PATH = './stl_files/'
	var options = {
		hostname: '192.168.0.1',
		port: 80,
		path: '/upload',
		method: 'POST'
	}
	
	http.request(options, function(res) {
		//idk
	}).on('post', function parse() {
		console.log("req: "+req)
		if (req === "post") {
			var hash = ""
			url.parse(reqStr).pathname.split("/")
			if (url.parse(reqStr).pathname.split("/")[1] === "stl") {
				hash = url.parse(reqStr).pathname.split("/").pop()
				priceFromHash(hash, callback)
			} else {
				var file_name = 'thefilenamecomesrightfromthehash'
				var file = fs.createWriteStream(FILE_PATH + file_name)

				var readStream = http.get(options, function(res) { //get the file
					console.log('error:')
					console.dir(err)
					console.log('price:')
					console.dir(price)
					console.log('hash:')
					console.dir(hash)
					console.log('path:')
					console.dir(path)
				})
				saveAndHashFile(readStream, readpath, './stl_files', '.stl', callback)
			}
		}
	})
}


//var file_name = url.parse(file_url).pathname.split('/').pop()
