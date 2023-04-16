
var channels = [
    {
        "channel" : 1,
        "address" : 1,

        "fixtureId" : 2,

        "focus" : {
            "positionX" : 0,
            "positionY" : 0,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },

    {
        "channel" : 2,
        "address" : 17,

        "fixtureId" : 0,
        
        "focus" : {
            "positionX" : 100,
            "positionY" : 100,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },

    {
        "channel" : 3,
        "address" : 33,

        "fixtureId" : 0,
        
        "focus" : {
            "positionX" : 200,
            "positionY" : 200,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },

    {
        "channel" : 4,
        "address" : 49,

        "fixtureId" : 0,

        "focus" : {
            "positionX" : 200,
            "positionY" : 50,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },

    {
        "channel" : 5,
        "address" : 17,

        "fixtureId" : 0,
        
        "focus" : {
            "positionX" : 150,
            "positionY" : 250,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },

    {
        "channel" : 6,
        "address" : 33,

        "fixtureId" : 1,
        
        "focus" : {
            "positionX" : 300,
            "positionY" : 50,
            "height" : 50,
            "width" : 50
        },

        "parameters" : {
            "red" : 0,
            "green" : 0,
            "blue" : 0
        }
    },
]

export default async function handler(req, res) {

    if (req.method == "GET") {
        res.status(200).json({"channels" : channels})
    }
    else if (req.method == "POST") {
        var body = JSON.parse(req.body)
        channels = body.channelPool
        res.status(200).send()
    }


}