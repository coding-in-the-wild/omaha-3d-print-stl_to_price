var admeshDir = '"C:/Program Files (x86)/admesh/admesh.exe"'
var saveAndHashStream = require('./saveAndHashStream.js')
var rename = require('./renameFile.js')
var runAdmesh = require('admesh-parser')
var db = require('./addToDatabase.js')

module.exports = function (stream, path, ext, tempPath, cb) {
	saveAndHashStream(stream, tempPath, function(err, hash) {
		if (err) cb(err)
		else {
			var newPath = path+hash+ext
			rename(tempPath, newPath, function() {
				if (err) cb(err)
				else {
					runAdmesh(admeshDir, '"'+newPath+'"', function(err0, obj) {
						if (err) cb(err, hash)
						else db(hash, obj, function(err, price) {
							cb(err, hash, price)
						})
					})
				}
			})
		}
	})
}