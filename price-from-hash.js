
var Database = require("..\omaha-3d-print-database\mock.js")
var db = Database()

module.exports = function priceFromHash(hash, callback) {
	db.get(hash, function(result) {
		if (if result != null && typeof result === "object") {
			
		}
	})
	
}