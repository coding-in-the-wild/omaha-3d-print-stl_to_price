var test = require('tap').test
var fs = require('fs')
var util = require('util')
var saveAndHashFile = require('../saveAndHashFile.js')
var file = '../stl_files/companion-cube-2.stl'
var writePath = '../stl_files/'
var ext = '.js'
var rStream = fs.createReadStream(file)

test("test getting a price from a hash", function test1(t) {
	t.plan(3)
	saveAndHashFile(rStream, writePath, ext, function(err, object) {
		t.notOk(err, 'no error')
		t.equal(object.price, 5.0175780752, 'price is correct')
		t.equal(object.hash, 'd372818be56327b94ad912f903b33b2f', 'hash is correct')
	})
})