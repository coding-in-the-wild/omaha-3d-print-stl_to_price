var exec = require('child_process').exec
var spawn = require('child_process').spawn
var md5 = require('crypto').createHash('md5')
var fs = require('fs')
var http = require("http")
var priceFromHash = require("./priceFromHash.js")
var stream = require("stream")
var url = require('url')

module.exports = function getStl(callback) {
	var FILE_PATH = './stl_files/'
	var options = {
		hostname: '192.168.0.1',
		port: 8080,
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

				http.get(options, function(res) { //get the file
					res.on('data', function(data) {
						file.write(data) //save to disc
						md5.update(data)
					}).on('end', function() {
						file.end()
						hash = md5.digest('hex') //use hasher to hash it
						console.log(file_name + ' downloaded to ' + FILE_PATH +
							'and has this hash: ' + hash)
						priceFromHash(hash, callback)
					})
				})
			}
		}
	})
}



//var file_name = url.parse(file_url).pathname.split('/').pop()
