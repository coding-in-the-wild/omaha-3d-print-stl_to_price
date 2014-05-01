var fs = require('fs')

module.exports = function renameFile(tempPath, newPath, badCb, goodCb) {
	fs.rename(tempPath, newPath, function(err) {
		if (err)
			badCb(err)
		else
			goodCb()
	})
}