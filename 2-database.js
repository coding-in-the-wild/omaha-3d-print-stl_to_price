var Database = require('omaha-3d-print-database')
var database = new Database()
module.exports = function db(obj, callback) {
	var PriceFromHash = new require("./priceFromHash.js")
	var priceFromHash =  PriceFromHash(database)
	database.insert(obj.hash, obj.admeshObj, function () {
		priceFromHash(obj.hash, function(price) {
			obj.price = price
			callback(false, obj)
		})
	})
}