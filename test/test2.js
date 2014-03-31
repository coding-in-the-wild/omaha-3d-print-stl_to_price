var fs = require('fs')
var util = require('util')
var saveAndHashFile = require('../saveAndHashFile.js')
var file = '../stl_files/companion-cube-2.stl'
var writePath = '../stl_files/'
var ext = '.js'
var rStream = fs.createReadStream(file)

saveAndHashFile(rStream, file, writePath, ext, function(err, object) {
	console.log('error: %j', util.inspect(err))
	console.log('price: ' + object.price)
	console.log('hash: ' + object.hash)
	console.log('path: ' + object.path)
})