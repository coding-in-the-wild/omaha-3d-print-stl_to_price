var http = require("http")
var stream = require("stream")
var priceFromHash = require("price-from-hash.js")

module.exports = function getStl(callback) {
	http.createConnection(request, reqStr) { //make this code correcter
		if (request === "post") {
			var hash = ""
			if (reqStr.split("/")[1] === "stl") {
				hash = reqStr.split("/")[2]
			} else {
				//get the file
				//save to disc
				//use hasher to hash it
				hash = "qwertyuiopasdfghjklzxcvbnmjoseph"
			}
			priceFromHash(hash, callback)
		}
	}
}