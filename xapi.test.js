const xapi = require('./xapi.js')

it ('get coin name Bitcoin', async () => {
	const data = await xapi.getTicker('http://coincap.io/front')
	expect(data).toEqual('Bitcoin')
})