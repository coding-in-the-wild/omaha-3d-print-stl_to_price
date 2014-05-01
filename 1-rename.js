var admeshDir = '"C:/Program Files (x86)/admesh/admesh.exe"'
var fs = require('fs')
var runAdmesh = require('admesh-parser')

module.exports = function rename(tempPath, newPath, cb) {
	fs.rename(tempPath, newPath, function(err) {
		if (err) cb(err)
		else runAdmesh(admeshDir, '"'+newPath+'"', cb)
	})
}