var fs = require('fs')
var saveAndHashFile = require('../saveAndHashFile.js')

if (0) {
	var readStream = fs.createReadStream('./test2helper.js', {encoding:"utf8"})
} else {
	var readStream = fs.createReadStream('./companion-cube.stl')
}

saveAndHashFile(readStream, './', '.stl', function(err, price, hash, path) {
	console.log('error:')
	console.dir(err)
	console.log('price:')
	console.dir(price)
	console.log('hash:')
	console.dir(hash)
	console.log('path:')
	console.dir(path)
})