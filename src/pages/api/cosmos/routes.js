const DBService = require("./../../../services/db");

export default async function handler(req, res) {

    if (req.method == "GET") {

    	const connection = await DBService.getConnection();
        try {

			const [rows, fields] = await connection.execute("SELECT * FROM routes;")
			res.status(200).json({routes : rows});
        } catch (error) {
          	console.log("Error: " + error);
        } finally {
          	connection.release();
        }
    }

    else if (req.method == "DELETE") {

        const route_id = JSON.parse(req.body);
        const connection = await DBService.getConnection();

        try {
            
            const sample_result = await connection.query("DELETE FROM samples WHERE `route_id` = ?;",
            [route_id]);

            const route_result = await connection.query("DELETE FROM routes WHERE `route_id` = ?;",
            [route_id]);

            res.status(200).send();
        }
        catch(error) {
            console.log(error);
        }
        finally {
            connection.release();
        }

    }

    else if (req.method == "PUT") {

        const route = JSON.parse(req.body);

        const connection = await DBService.getConnection();

        try {

            const result = await connection.query("UPDATE routes SET `location` = ?, `environment` = ?, `time_of_day` = ?, `emotion_1` = ?, `emotion_2` = ? WHERE `route_id` = ?;", 
            [route.location,route.environment,route.time_of_day,route.emotion_1,route.emotion_2,route.route_id]);

            res.status(200).send();
        }
        
        catch(error) {
            console.log(error);
        }

        finally {
            connection.release();
        }

    }

    else if (req.method == "POST") {

        const connection = await DBService.getConnection();

        try {
            const result = await connection.query("INSERT INTO routes (`location`,`environment`,`time_of_day`,`emotion_1`,`emotion_2`) VALUES ('','','','','');")
            res.status(200).json({"route_id" : result[0].insertId})
        }

        catch(error) {
            console.log(error);
        }

        finally {
            connection.release();  
        }
    }
}