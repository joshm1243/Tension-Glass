const DBService = require("../../../services/db");

export default async function handler(req, res) {

    if (req.method == "GET") {

    	const connection = await DBService.getConnection();
        try {
			const [rows, fields] = await connection.execute("SELECT * FROM routes INNER JOIN samples ON routes.route_id = samples.route_id;")
			res.status(200).json({samples : rows});
        } catch (error) {
          	console.log(error);
        } finally {
          	connection.release();
        }
    }   

    else if (req.method == "POST") {

        const defaultGrid = [["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]]

    	const connection = await DBService.getConnection();

        const body = JSON.parse(req.body);

        try {
			const result = await connection.execute("INSERT INTO samples (`route_id`,`grid`) VALUES (?,?);",
            [body.route_id,defaultGrid])
			res.status(200).json({"sample_id" : result[0].insertId});

        } catch (error) {
          	console.log(error);
        } finally {
          	connection.release();
        }
    }
    
    
    else if (req.method == "PUT") {

    	const connection = await DBService.getConnection();

        try {

            const body = JSON.parse(req.body);

			const [rows, fields] = await connection.execute("UPDATE samples SET grid = ? WHERE sample_id = ?;",
            [body.grid,body.sample_id])
			res.status(200).send();
        } catch (error) {
          	console.log(error);
        } finally {
          	connection.release();
        }
    }   

    else if (req.method == "DELETE") {

    	const connection = await DBService.getConnection();

        try {

            const body = JSON.parse(req.body);

			const [rows, fields] = await connection.execute("DELETE FROM samples WHERE sample_id = ?;",
            [body.sample_id]);

			res.status(200).send();
        } catch (error) {
          	console.log(error);
        } finally {
          	connection.release();
        }
    }   


}