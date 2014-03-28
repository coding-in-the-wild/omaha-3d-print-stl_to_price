var fs = require('fs')
var md5 = require('crypto').createHash('md5')
var priceFromHash = require("./priceFromHash.js")
var FILE_PATH = './'

var callback = function callback(arg1, arg2) {
	console.log('arg1: ' + arg1 + ', arg2: ' + arg2)
}

var readStream = fs.createReadStream('./test2helper.js', {encoding:"utf8"})
var file = fs.createWriteStream(FILE_PATH + 'temp.js')
var hash = ''

readStream.on('data', function(data) {
	console.log("chunk: " + data);
	file.write(data)
	md5.update(data)
}).on('end', function() {
	file.end()
	hash = md5.digest('hex')
	console.log(FILE_PATH + hash + '.js')
}).on('finish', function() {
	file.rename(FILE_PATH + 'temp.js', FILE_PATH + hash + '.js', function() {
		priceFromHash(hash, callback)
	})
})