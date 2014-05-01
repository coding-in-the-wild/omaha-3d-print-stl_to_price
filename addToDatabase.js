var Database = require('omaha-3d-print-database')
var database = new Database()
module.exports = function db(hash, admeshObj, cb) {
	var PriceFromHash = new require("./priceFromHash.js")
	var priceFromHash =  PriceFromHash(database)
	database.insert(hash, admeshObj, function () {
		priceFromHash(hash, cb)
	})
}