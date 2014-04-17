var admeshDir = '"C:/Program Files (x86)/admesh/admesh.exe"'
var fs = require('fs')
var runAdmesh = require('admesh-parser')
var db = require('./2-database.js')

module.exports = function save(obj, cb) {
	fs.rename(obj.tempPath, obj.newPath, function(err) {
		if (err) cb(err, obj)
		else runAdmesh(admeshDir, '"'+obj.newPath+'"', function (err, admeshObj) {
			if (err) cb(err, obj)
			else {
				obj.admeshObj = admeshObj
				db(obj, cb)
			}
		})
	})
}