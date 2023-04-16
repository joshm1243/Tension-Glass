const axios = require("axios")

export default async function handler(req, res) {

    var channels = [
        {
            "channel" : 1,
            "colour" : "Red",
            "param_red" : 10,
            "param_green" : 20,
            "param_blue" : 30,
            "info" : "Info"
        },

        {
            "channel" : 2,
            "colour" : "Green",
            "param_red" : 10,
            "param_green" : 20,
            "param_blue" : 30,
            "info" : "Info"
        },

        {
            "channel" : 3,
            "colour" : "Red",
            "param_red" : 10,
            "param_green" : 20,
            "param_blue" : 255,
            "info" : "Info"
        },

        {
            "channel" : 4,
            "colour" : "Red",
            "param_red" : 10,
            "param_green" : 20,
            "param_blue" : 30,
            "info" : "Info"
        },

        {
            "channel" : 5,
            "colour" : "Red",
            "param_red" : 10,
            "param_green" : 20,
            "param_blue" : 30,
            "info" : "Info"
        },

        

    ]

	res.status(200).json({"channels" : channels})
}