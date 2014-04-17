var md5 = require('crypto').createHash('md5')
var fs = require('fs')
var save = require('./1-save.js')

module.exports = function (stream, obj, cb) {
	var file = fs.createWriteStream(obj.tempPath)
	stream.on('data', function(data) {
		md5.update(data)
		file.write(data)
	}).on('end', function() {
		obj.hash = md5.digest('hex')
		obj.newPath = obj.path+obj.hash+obj.ext
		file.end(null, null, function(err) {
			if (err) cb(err, result)
			else     save(obj, cb)
		})
	})
}