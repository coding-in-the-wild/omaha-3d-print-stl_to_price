var test = require('tap').test
var fs = require('fs')
var file = '../stl_files/companion-cube-2.stl'
var opts = {
	path: '../stl_files/',
	ext: '.stl',
	tempPath: '../stl_files/temp.stl'
}

test("test getting a price from a hash", function test1(t) {
	var stlToPrice = require('../index.js')
	var stream1 = fs.createReadStream(file)

	t.plan(4)
	stlToPrice(stream1, opts.path, opts.ext, opts.tempPath, function(err, hash, price) {
		t.notEqual(err.code, 'Unknown system errno 740', 'running as administrator')
		t.notOk(err, 'no error')
		t.equal(hash, 'd372818be56327b94ad912f903b33b2f', 'hash')
		t.equal(price, 5.0175780752, 'price')
	})
})
