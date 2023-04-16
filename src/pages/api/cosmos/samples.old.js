const DBService = require("../../../services/db");

export default async function handler(req, res) {


    if (req.method == "GET") {

    	const connection = await DBService.getConnection();
        try {

			const [rows, fields] = await connection.execute("SELECT samples.id AS sample_id, route_id, sub_id, grid, location, in_out, time_of_day, core_emotion, auxiliary_emotion, core_material, auxiliary_material, corpus_line, prompt FROM samples INNER JOIN routes ON samples.route_id = routes.id;")
			res.status(200).json({samples : rows});
        } catch (error) {
          	console.log("Error." + error);
        } finally {
          	connection.release();
        }
    }
	else if (req.method == "PUT") {

		
		var body = JSON.parse(req.body)

		const connection = await DBService.getConnection();

		try {
			const [result] = await connection.execute("UPDATE samples SET `grid` = ? WHERE `id` = ?;",[body.grid,body.sample_id]);
		} finally {
			connection.release();
		}

		res.status(200).send();
	}
    else {
        res.status(200).send();
    }
}