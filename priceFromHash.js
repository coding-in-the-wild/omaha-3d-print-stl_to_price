var getPrice = require("../omaha-3d-print-price_calculator/getPrice.js")

module.exports = function PriceFromHash(database) {
	return function priceFromHash(hash, callback) {
		database.get(hash, function(err, result) {
			if (!err) {
				if (result != null && typeof result === "object") {
					callback( getPrice({}, result) )
				} else {
					callback( new Error("'get' did not return an object") )
				}
			}
		})
	}
}