var fs = require('fs')
var md5 = require('crypto').createHash('md5')

module.exports = function saveStream(stream, filePath, badCb, goodCb) {
	var file = fs.createWriteStream(filePath)
	stream.on('data', function(data) {
		md5.update(data)
		file.write(data)
	}).on('end', function() {
		file.end(null, null, function(err) {
			if (err)	badCb(err, md5.digest('hex'))
			else		goodCb(md5.digest('hex'))
		})
	})
}