var fs = require('fs')

module.exports = function renameFile(tempPath, newPath, cb) {
	fs.rename(tempPath, newPath, function(err) {
		cb(err)
	})
}