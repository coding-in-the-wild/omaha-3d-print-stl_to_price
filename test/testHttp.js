﻿var test = require('tap').test
var request = require('supertest')
var saveAndHashFile = require('../index.js')
var file = '../stl_files/companion-cube-2.stl'
var obj = {
	path: '../stl_files/',
	ext: '.stl',
	tempPath: '../stl_files/temp.stl'
}

/*
test("test getting a price from a hash", function test1(t) {
	t.plan(3)
	request = request('http://localhost:8080')
	
	request.get('/').expect(200, function(err){
		t.notOk(err)
	})
	http.createServer(function (req, res) {
		if (req.method === 'POST') {
			t.ok(true, "post method")
			t.end()
		}
	})
	
	//.listen(8080)
	
	//'/stl/'
	saveAndHashFile(stream, obj, function(err, object) {
	})
})
*/
