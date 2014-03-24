var exec = require('child_process').exec
var spawn = require('child_process').spawn
var md5 = require('crypto').createHash('md5')
var fs = require('fs')
var http = require("http")
var priceFromHash = require("price-from-hash.js")
var stream = require("stream")
var url = require('url')

// App variables
var file_url = 'http://upload.wikimedia.org/wikipedia/commons/4/4f/Big%26Small_edit_1.jpg';
var FILE_PATH = './stl_files/'



module.exports = function getStl(callback) {
	http.createConnection(function(request, reqStr) { //make this code correcter
		if (request === "post") {
			var hash = ""
			if (reqStr.split("/")[1] === "stl") {
				hash = reqStr.split("/")[2]
				priceFromHash(hash, callback)
			} else {
				//get the file
				var download_file_httpget = function(file_url) {
					var options = {
						host: url.parse(file_url).host,
						port: 80,
						path: url.parse(file_url).pathname
					}
					
					var file_name = url.parse(file_url).pathname.split('/').pop();
					var file = fs.createWriteStream(FILE_PATH + file_name);

					http.get(options, function(res) {
						res.on('data', function(data) {
							file.write(data)
							md5.update(data)
						}).on('end', function() {
							file.end()
							hash = md5.digest('hex')
							console.log(file_name + ' downloaded to ' + FILE_PATH)
						});
					});
				}
					//save to disc
						//use hasher to hash it
						//In the future, use this: github.com/substack/rolling-hash
						hash = "qwertyuiopasdfghjklzxcvbnmjoseph"
						priceFromHash(hash, callback)
			}
		}
	})
}