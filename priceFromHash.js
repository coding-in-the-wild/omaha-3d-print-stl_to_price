var getPrice = require("../omaha-3d-print-price_calculator/getPrice.js")

module.exports = function PriceFromHash(database) {
	return function priceFromHash(hash, callback) {
		console.log('pfh called')
		database.get(hash, function(err, result) {
			if (!err) {
				console.log('extracting from db')
				if (result != null && typeof result === "object") {
					console.log('cb...')
					callback( getPrice({}, result) )
				} else {
					console.log('pfh error')
					callback( new Error("'get' did not return an object") )
				}
			} else {
				callback( new Error("'get' did not find database entry for " + hash) )
			}
		})
	}
}