const axios = require("axios")

export default async function handler(req, res) {
	res.setHeader("Cache-Control","no-cache");

    if (req.method == "POST") {

		const body = JSON.parse(req.body)

        if (body.script) {

			const script = JSON.stringify(body.script)

			var cosmosResult = await axios.post("http://127.0.0.1:3001/api/script", {
			 	"script" : script
			})

			if (cosmosResult.status == 200) {
				res.status(200).json({"data" : cosmosResult.data});
			}
        }

        else {
            res.status(400).send();
        }



	}
    
	res.status(200).send();
}