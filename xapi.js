const request = require('request')


exports.getTicker = (url) => {
	return new Promise ((resolve, reject) => {
		return request(url, (err, res, body) => {
			const data = JSON.parse(body)
			resolve(data[0].long) // Bitcoin
		})
	})
}





