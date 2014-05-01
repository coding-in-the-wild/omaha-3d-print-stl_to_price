var admeshDir = '"C:/Program Files (x86)/admesh/admesh.exe"'
var saveAndHashStream = require('./saveAndHashStream.js')
var rename = require('./renameFile.js')
var runAdmesh = require('admesh-parser')
var db = require('./addToDatabase.js')

module.exports = function (stream, path, ext, tempPath, cb) {
	saveAndHashStream(stream, tempPath, cb, function(hash) {
		var newPath = path+hash+ext
		rename(tempPath, newPath, cb, function() {
			runAdmesh(admeshDir, '"'+newPath+'"', function(err0, obj) {
				if (err0) cb(err0, hash)
				else db(hash, obj, function(err1, price) {
					cb(err1, hash, price)
				})
			})
		})
	})
}