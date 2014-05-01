var test = require('tap').test
var fs = require('fs')
var saveAndHashFile = require('../index.js')
var file = '../stl_files/companion-cube-2.stl'
var opts = {
	path: '../stl_files/',
	ext: '.stl',
	tempPath: '../stl_files/temp.stl'
}
var stream = fs.createReadStream(file)

test("test getting a price from a hash", function test1(t) {
	t.plan(3)
	saveAndHashFile(stream, opts.path, opts.ext, opts.tempPath, function(err, hash, price) {
		console.log("Error Here:", err)
		t.notOk(err, 'no error')
		t.equal(price, 5.0175780752, 'price is correct')
		t.equal(hash, 'd372818be56327b94ad912f903b33b2f', 'hash is correct')
	})
})