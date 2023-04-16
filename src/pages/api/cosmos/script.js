const axios = require("axios")

export default async function handler(req, res) {
	res.setHeader("Cache-Control","no-cache");

    if (req.method == "POST") {

		const body = JSON.parse(req.body)
		const script = JSON.stringify(body.script)

		var scriptRes = await axios.post("http://127.0.0.1:3001/cosmos/api/script", { "script" : script	})

		res.status(200).json({"lines_markup" : scriptRes.data.lines_markup});
		
	}
    
	res.status(200).send();
}
