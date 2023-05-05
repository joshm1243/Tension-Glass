const axios = require("axios")

export default async function handler(req, res) {
	res.setHeader("Cache-Control","no-cache");

    const body = JSON.parse(req.body)
    const design_prompt = JSON.stringify(body.prompt)

    if (req.method == "POST") {
        var designResult = await axios.post("http://127.0.0.1:3001/api/designs/generate", { "prompt" : design_prompt })
        console.log(designResult.data.sample_values)
		res.status(200).json({"sample_values" : designResult.data.sample_values});
	}
    
	res.status(200).send();
}

