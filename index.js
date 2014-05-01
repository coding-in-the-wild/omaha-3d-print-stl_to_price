var md5 = require('crypto').createHash('md5')
var fs = require('fs')
var save = require('./1-save.js')
var db = require('./2-database.js')

module.exports = function (stream, path, ext, tempPath, cb) {
	var file = fs.createWriteStream(tempPath)
	stream.on('data', function(data) {
		md5.update(data)
		file.write(data)
	}).on('end', function() {
		var hash = md5.digest('hex')
		var newPath = path+hash+ext
		file.end(null, null, function(err1) {
			if (err1)
				cb(err1, hash)
			else
				save(tempPath, newPath, function(err2, obj) {
					if (err2)
						cb(err2, hash)
					else db(hash, obj, function(err3, price) {
						cb(err3, hash, price)
					})
			})
		})
	})
}