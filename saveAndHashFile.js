var fs = require('fs')
var md5 = require('crypto').createHash('md5')
var Database = require("../omaha-3d-print-database/mock.js")
var db = new Database()
var PriceFromHash = require("./priceFromHash.js")
var priceFromHash = new PriceFromHash(db)
var runAdmesh = require('../admesh-parser/runAdmesh.js')

module.exports = function saveAndHashFile(inStream, readPath, writePath, extension, callback) {
	if (extension.indexOf('.') !== 0) {
		extension = '.stl'
	}
	var file = fs.createWriteStream(writePath + 'temp' + extension)
	inStream.on('data', function(data) {
		file.write(data)
		md5.update(data)
	}).on('end', function() {
		hash = md5.digest('hex')
		file.end(null, null, function(err) {
			if (!err) {
				runAdmesh('', readPath, function (err, admeshObj) {
					if (!err) {
						fs.rename(writePath + 'temp' + extension, writePath + hash + extension, function(err) {
							if (!err) {
								db.insert(hash, admeshObj, function () {
									priceFromHash(hash, function(price) {
										callback(false, {
											price: price,
											hash: hash,
											path: writePath+hash+extension
										})
									})
								})
							} else {
								console.log('rename err: ' + err.message)
							}
						})
					} else {
						console.log('admesh err: ' + err.message)
					}
				})
			} else {
				console.log('Uber fail')
			}
		})
	})
}