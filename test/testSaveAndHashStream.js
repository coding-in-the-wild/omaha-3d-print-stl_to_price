var test = require('tap').test
var fs = require('fs')
var file = '../stl_files/companion-cube-2.stl'
var opts = {
	path: '../stl_files/',
	ext: '.stl',
	tempPath: '../stl_files/temp.stl'
}

test("test saveAndHashStream", function test2(t) {
	var saveAndHashStream = require("../saveAndHashStream.js")
	var stream2 = fs.createReadStream(file)
	
	var callbackBad = function(err, hash) {
		t.notOk(err, 'no error')
		t.equal(hash, 'd372818be56327b94ad912f903b33b2f', 'hash')
		t.ok(false, 'throwing error because bad callback was called')
		t.end()
	}
	var callbackGood = function(hash) {
		t.equal(hash, 'd372818be56327b94ad912f903b33b2f', 'hash')
		t.end()
	}
	saveAndHashStream(stream2, opts.tempPath, callbackBad, callbackGood)
})
