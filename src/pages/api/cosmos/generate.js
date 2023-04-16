const axios = require("axios")

export default async function handler(req, res) {

	var body = JSON.parse(req.body)

	var cosmosRes = await axios.post("http://127.0.0.1:105/cosmos/api/generate", {
		text : body.text
	})

	var samples = cosmosRes.data.samples

	var channelArray = [
		[1, samples[0][0]], [2, samples[0][1]], [3, samples[0][2]],
		[17, samples[1][0]], [18, samples[1][1]], [19, samples[1][2]],
		[33, samples[2][0]], [34, samples[2][1]], [35, samples[2][2]],
		[49, samples[3][0]], [50, samples[3][1]], [51, samples[3][2]],
		[65, samples[4][0]], [66, samples[4][1]], [67, samples[4][2]],
		[81, samples[5][0]], [82, samples[5][1]], [83, samples[5][2]],
	]
	

	var igniteRes = await axios.post("http://127.0.0.1:3002/api/channels/set", {
		"network" : "0",
		"universe" : "0",
		"channelArray" : channelArray
	})

	res.status(200).json({"samples" : samples})
}