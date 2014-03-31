var fs = require('fs')
var md5 = require('crypto').createHash('md5')
var Database = require("../omaha-3d-print-database/mock.js")
var db = new Database()
var PriceFromHash = require("./priceFromHash.js")
var priceFromHash = new PriceFromHash(db)
var runAdmesh = require('../admesh-parser/runAdmesh.js')

module.exports = function saveAndHashFile(inStream, writePath, extension, callback) {
	var file = fs.createWriteStream(writePath + 'temp' + extension)
	inStream.on('data', function(data) {
		file.write(data)
		md5.update(data)
	}).on('end', function() {
		hash = md5.digest('hex')
		file.end(null, null, function() {
			runAdmesh('', '.\\companion-cube-2.stl', function (err, admeshObj) {
				if (!err) {
					fs.rename(writePath + 'temp' + extension, writePath + hash + extension, function(err) {
						if (!err) {
							db.insert(hash, admeshObj, function () {
								priceFromHash(hash, function(price) {
									callback(false, price, hash, writePath+hash+extension)
								})
							})
						}
					})
				}
			})
		})
	})
}