var test = require('tap').test
var request = require('supertest')
var express = require('express')
var saveAndHashFile = require('../index.js')
var file = '../stl_files/companion-cube-2.stl'
var obj = {
	path: '../stl_files/',
	ext: '.stl',
	tempPath: '../stl_files/temp.stl'
}


test("test getting a price from a hash", function test1(t) {
	t.plan(3)
	var app = express()
	app.listen(8080)
	
	request(app)
		.post('/d372818be56327b94ad912f903b33b2f')
		.attach('avatar', file)
	saveAndHashFile(stream, obj, function(err, object) {
	})
})