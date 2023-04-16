const axios = require("axios")

export default async function handler(req, res) {
	res.setHeader("Cache-Control","no-cache");

    const body = JSON.parse(req.body)
    const samples = JSON.stringify(body.samples)

    console.log(body)

    if (req.method == "POST") {

        var renderResult = await axios.post("http://127.0.0.1:3001/api/samples/render", { "samples" : samples })

		res.status(200).send();
	}
    
	res.status(200).send();
}

