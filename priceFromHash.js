var getPrice = require("3d-print-price-calculator")

module.exports = function PriceFromHash(database) {
	return function priceFromHash(hash, callback) {
		database.get(hash, function(err, result) {
			if (err)
				callback( new Error("'get' did not find database entry for " + hash) ) //bad
			else if (result != null && typeof result === "object")
				callback( false, getPrice({}, result) )							//good
			else
				callback( new Error("'get' returned wrong data") )				//bad
		})
	}
}