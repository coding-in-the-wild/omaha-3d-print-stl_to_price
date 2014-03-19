var test = require('tap').test
var Database = require("../../omaha-3d-print-database/mock.js")
var db = new Database()
var PriceFromHash = require("../priceFromHash.js")

var fakeHash = "Md5HashesAre32CharactersInLength"
var fakeObj = { volume: 16387 }

test("test getting a price from a hash", function test1(t) {
	t.plan(2)
	var priceFromHash = new PriceFromHash(db)
	db.insert(fakeHash, fakeObj, function doneInserting(err) {
		if (!err) {
			priceFromHash(fakeHash, function cbGetPrice2(price) {
				t.ok(price, "price is truthy")
				t.equal(price, 13.603174999999998, "returns correct price")
				t.end()
			})
		}
	})
})