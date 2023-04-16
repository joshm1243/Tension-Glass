const axios = require("axios")

const FixtureLibrary = [
    {
        "fixtureId" : 0,
        "manufacturer" : "American DJ",
        "name" : "Mega Tripar Profile Plus",
        "modes" : [
            {
                "modeId" : 0,
                "name" : "Mode 4",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "virtual" : true,
                                "DMXHomeValue" : 255
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 1,
                "name" : "Mode 5",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {

                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 5,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }

                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 2,
                "name" : "Mode 6",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 6,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 3,
                "name" : "Mode 9",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 6,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }

                                        ]
                                    }
                                ] 
                            },

                            "image" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 0
                                    },

                                    {
                                        "groupId" : 1,
                                        "tileId" : 0,
                                        "DMXOutputValue" : 0
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "name" : "Effect Macros",
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Dimming Mode",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 1,
                                                "name" : "Colour Macro",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },



                                            {
                                                "tileId" : 2,
                                                "name" : "Colour Change 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 7,
                                                            "DMXEndValue" : 7 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Colour Change 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Colour Change 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 35,
                                                            "DMXEndValue" : 35 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 5,
                                                "name" : "Colour Change 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 6,
                                                "name" : "Colour Change 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 7,
                                                "name" : "Colour Change 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 8,
                                                "name" : "Colour Change 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 9,
                                                "name" : "Colour Change 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 10,
                                                "name" : "Colour Change 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 11,
                                                "name" : "Colour Change 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 12,
                                                "name" : "Colour Change 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 13,
                                                "name" : "Colour Change 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 14,
                                                "name" : "Colour Change 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 15,
                                                "name" : "Colour Change 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 215,
                                                            "DMXEndValue" : 215
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 16,
                                                "name" : "Colour Change 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 17,
                                                "name" : "Colour Change 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 18,
                                                "name" : "Colour Fade 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 19,
                                                "name" : "Colour Fade 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 20,
                                                "name" : "Colour Fade 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 21,
                                                "name" : "Colour Fade 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 22,
                                                "name" : "Colour Fade 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 23,
                                                "name" : "Colour Fade 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 24,
                                                "name" : "Colour Fade 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 25,
                                                "name" : "Colour Fade 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 26,
                                                "name" : "Colour Fade 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 27,
                                                "name" : "Colour Fade 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 28,
                                                "name" : "Colour Fade 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 29,
                                                "name" : "Colour Fade 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 30,
                                                "name" : "Colour Fade 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 31,
                                                "name" : "Colour Fade 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 32,
                                                "name" : "Colour Fade 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 33,
                                                "name" : "Colour Fade 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 34,
                                                "name" : "Sound Active 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 35,
                                                "name" : "Sound Active 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 36,
                                                "name" : "Sound Active 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 37,
                                                "name" : "Sound Active 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 38,
                                                "name" : "Sound Active 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 39,
                                                "name" : "Sound Active 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 40,
                                                "name" : "Sound Active 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 41,
                                                "name" : "Sound Active 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 42,
                                                "name" : "Sound Active 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 43,
                                                "name" : "Sound Active 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 44,
                                                "name" : "Sound Active 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 45,
                                                "name" : "Sound Active 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 46,
                                                "name" : "Sound Active 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 47,
                                                "name" : "Sound Active 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 48,
                                                "name" : "Sound Active 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 49,
                                                "name" : "Sound Active 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },

                                    {
                                        "groupId" : 1,
                                        "name" : "Effect Parameters",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Effect Size",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ] 
                                    }
                                ]
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 4,
                "name" : "Mode 10",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 6,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 5,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }

                                        ]
                                    }
                                ]                        
                            },

                            "image" : {

                                "homeTiles" : [
                                    
                                    {
                                        "groupId" : 0,
                                        "tileId" : 0
                                    },

                                    {
                                        "groupId" : 1,
                                        "tileId" : 0,
                                        "DMXValue" : 0
                                    },

                                    {
                                        "groupId" : 2,
                                        "tileId" : 0
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "name" : "Effect Macros",
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Dimming Mode",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 1,
                                                "name" : "Colour Macro",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Colour Change 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 7,
                                                            "DMXEndValue" : 7 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Colour Change 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Colour Change 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 35,
                                                            "DMXEndValue" : 35 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 5,
                                                "name" : "Colour Change 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 6,
                                                "name" : "Colour Change 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 7,
                                                "name" : "Colour Change 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 8,
                                                "name" : "Colour Change 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 9,
                                                "name" : "Colour Change 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 10,
                                                "name" : "Colour Change 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 11,
                                                "name" : "Colour Change 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 12,
                                                "name" : "Colour Change 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 13,
                                                "name" : "Colour Change 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 14,
                                                "name" : "Colour Change 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 15,
                                                "name" : "Colour Change 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 215,
                                                            "DMXEndValue" : 215
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 16,
                                                "name" : "Colour Change 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 17,
                                                "name" : "Colour Change 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 18,
                                                "name" : "Colour Fade 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 19,
                                                "name" : "Colour Fade 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 20,
                                                "name" : "Colour Fade 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 21,
                                                "name" : "Colour Fade 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 22,
                                                "name" : "Colour Fade 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 23,
                                                "name" : "Colour Fade 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 24,
                                                "name" : "Colour Fade 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 25,
                                                "name" : "Colour Fade 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 26,
                                                "name" : "Colour Fade 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 27,
                                                "name" : "Colour Fade 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 28,
                                                "name" : "Colour Fade 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 29,
                                                "name" : "Colour Fade 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 30,
                                                "name" : "Colour Fade 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 31,
                                                "name" : "Colour Fade 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 32,
                                                "name" : "Colour Fade 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 33,
                                                "name" : "Colour Fade 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 34,
                                                "name" : "Sound Active 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 35,
                                                "name" : "Sound Active 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 36,
                                                "name" : "Sound Active 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 37,
                                                "name" : "Sound Active 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 38,
                                                "name" : "Sound Active 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 39,
                                                "name" : "Sound Active 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 40,
                                                "name" : "Sound Active 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 41,
                                                "name" : "Sound Active 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 42,
                                                "name" : "Sound Active 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 43,
                                                "name" : "Sound Active 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 44,
                                                "name" : "Sound Active 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 45,
                                                "name" : "Sound Active 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 46,
                                                "name" : "Sound Active 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 47,
                                                "name" : "Sound Active 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 48,
                                                "name" : "Sound Active 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 49,
                                                "name" : "Sound Active 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 7,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }


                                        ]
                                    },

                                    {
                                        "groupId" : 1,
                                        "name" : "Effect Parameters",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Effect Size",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ] 
                                    },

                                    {
                                        "groupId" : 2,
                                        "name" : "Dimming Curves",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Standard Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 10,
                                                            "DMXEndValue" : 10
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 1,
                                                "name" : "Stage Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 30,
                                                            "DMXEndValue" : 30
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 2,
                                                "name" : "TV Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Architectural Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Theatre Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },

    {
        "fixtureId" : 1,
        "manufacturer" : "American DJ",
        "name" : "Mega Hex Par",
        "modes" : [
            {
                "modeId" : 0,
                "name" : "Mode 6",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "virtual" : true,
                                "DMXHomeValue" : 255
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "white" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "amber" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 5,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 6,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 1,
                "name" : "Mode 7",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {

                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 7,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }

                            },

                            "colour" : {

                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "white" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "amber" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 5,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 6,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            }  
                        }
                    }
                ]
            },

            {
                "modeId" : 2,
                "name" : "Mode 8",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 7,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "white" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "amber" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 5,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 6,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 3,
                "name" : "Mode 11",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 7,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "white" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "amber" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 5,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 6,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ] 
                            },

                            "image" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 0
                                    },

                                    {
                                        "groupId" : 1,
                                        "tileId" : 0,
                                        "DMXOutputValue" : 0
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "name" : "Effect Macros",
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Dimming Mode",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 1,
                                                "name" : "Colour Macro",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },



                                            {
                                                "tileId" : 2,
                                                "name" : "Colour Change 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 7,
                                                            "DMXEndValue" : 7 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Colour Change 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Colour Change 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 35,
                                                            "DMXEndValue" : 35 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 5,
                                                "name" : "Colour Change 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 6,
                                                "name" : "Colour Change 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 7,
                                                "name" : "Colour Change 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 8,
                                                "name" : "Colour Change 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 9,
                                                "name" : "Colour Change 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 10,
                                                "name" : "Colour Change 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 11,
                                                "name" : "Colour Change 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 12,
                                                "name" : "Colour Change 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 13,
                                                "name" : "Colour Change 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 14,
                                                "name" : "Colour Change 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 15,
                                                "name" : "Colour Change 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 215,
                                                            "DMXEndValue" : 215
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 16,
                                                "name" : "Colour Change 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 17,
                                                "name" : "Colour Change 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 18,
                                                "name" : "Colour Fade 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 19,
                                                "name" : "Colour Fade 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 20,
                                                "name" : "Colour Fade 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 21,
                                                "name" : "Colour Fade 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 22,
                                                "name" : "Colour Fade 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 23,
                                                "name" : "Colour Fade 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 24,
                                                "name" : "Colour Fade 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 25,
                                                "name" : "Colour Fade 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 26,
                                                "name" : "Colour Fade 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 27,
                                                "name" : "Colour Fade 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 28,
                                                "name" : "Colour Fade 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 29,
                                                "name" : "Colour Fade 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 30,
                                                "name" : "Colour Fade 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 31,
                                                "name" : "Colour Fade 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 32,
                                                "name" : "Colour Fade 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 33,
                                                "name" : "Colour Fade 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 34,
                                                "name" : "Sound Active 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 35,
                                                "name" : "Sound Active 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 36,
                                                "name" : "Sound Active 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 37,
                                                "name" : "Sound Active 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 38,
                                                "name" : "Sound Active 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 39,
                                                "name" : "Sound Active 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 40,
                                                "name" : "Sound Active 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 41,
                                                "name" : "Sound Active 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 42,
                                                "name" : "Sound Active 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 43,
                                                "name" : "Sound Active 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 44,
                                                "name" : "Sound Active 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 45,
                                                "name" : "Sound Active 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 46,
                                                "name" : "Sound Active 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 47,
                                                "name" : "Sound Active 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 48,
                                                "name" : "Sound Active 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 49,
                                                "name" : "Sound Active 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },

                                    {
                                        "groupId" : 1,
                                        "name" : "Effect Parameters",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Effect Size",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 11,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ] 
                                    }
                                ]
                            }
                        }
                    }
                ]
            },

            {
                "modeId" : 4,
                "name" : "Mode 12",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "hardwareValues" : {
                                    "DMXFields" : [
                                        {
                                            "DMXRelativeAddress" : 7,
                                            "DMXStartValue" : 0,
                                            "DMXEndValue" : 255,
                                            "DMXHomeValue" : 0
                                        }
                                    ]
                                }
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    },

                                    "white" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 4,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "amber" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 5,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "uv" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 6,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    }
                                }
                            },

                            "shutter" : {

                                "homeTiles" : [

                                    {
                                        "groupId" : 0,
                                        "tileId" : 1
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Closed",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 1,
                                                "name" : "Open",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 2,
                                                "name" : "Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 64,
                                                            "DMXEndValue" : 95
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 3,
                                                "name" : "Strobe Pulse",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 128,
                                                            "DMXEndValue" : 159
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 4,
                                                "name" : "Random Strobe",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 8,
                                                            "DMXStartValue" : 192,
                                                            "DMXEndValue" : 223
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ] 
                            },
                            
                            "image" : {

                                "homeTiles" : [
                                    
                                    {
                                        "groupId" : 0,
                                        "tileId" : 0
                                    },

                                    {
                                        "groupId" : 1,
                                        "tileId" : 0,
                                        "DMXValue" : 0
                                    },

                                    {
                                        "groupId" : 2,
                                        "tileId" : 0
                                    }
                                ],

                                "groups" : [

                                    {
                                        "groupId" : 0,
                                        "name" : "Effect Macros",
                                        "tiles" : [

                                            {
                                                "tileId" : 0,
                                                "name" : "Dimming Mode",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 0 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 1,
                                                "name" : "Colour Macro",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },



                                            {
                                                "tileId" : 2,
                                                "name" : "Colour Change 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 7,
                                                            "DMXEndValue" : 7 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Colour Change 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Colour Change 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 35,
                                                            "DMXEndValue" : 35 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 5,
                                                "name" : "Colour Change 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 6,
                                                "name" : "Colour Change 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 7,
                                                "name" : "Colour Change 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 8,
                                                "name" : "Colour Change 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 9,
                                                "name" : "Colour Change 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 10,
                                                "name" : "Colour Change 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 11,
                                                "name" : "Colour Change 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 12,
                                                "name" : "Colour Change 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 13,
                                                "name" : "Colour Change 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 14,
                                                "name" : "Colour Change 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 15,
                                                "name" : "Colour Change 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 215,
                                                            "DMXEndValue" : 215
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 16,
                                                "name" : "Colour Change 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 17,
                                                "name" : "Colour Change 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 105,
                                                            "DMXEndValue" : 105
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },

                                            {
                                                "tileId" : 18,
                                                "name" : "Colour Fade 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 19,
                                                "name" : "Colour Fade 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 20,
                                                "name" : "Colour Fade 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 21,
                                                "name" : "Colour Fade 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 22,
                                                "name" : "Colour Fade 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 23,
                                                "name" : "Colour Fade 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 24,
                                                "name" : "Colour Fade 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 25,
                                                "name" : "Colour Fade 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 26,
                                                "name" : "Colour Fade 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 27,
                                                "name" : "Colour Fade 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 28,
                                                "name" : "Colour Fade 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 29,
                                                "name" : "Colour Fade 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 30,
                                                "name" : "Colour Fade 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 31,
                                                "name" : "Colour Fade 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 32,
                                                "name" : "Colour Fade 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 33,
                                                "name" : "Colour Fade 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            },
                                            
                                            {
                                                "tileId" : 34,
                                                "name" : "Sound Active 1",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 5,
                                                            "DMXEndValue" : 5 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 35,
                                                "name" : "Sound Active 2",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 20,
                                                            "DMXEndValue" : 20 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 36,
                                                "name" : "Sound Active 3",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 40,
                                                            "DMXEndValue" : 40
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 37,
                                                "name" : "Sound Active 4",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 55,
                                                            "DMXEndValue" : 55
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 38,
                                                "name" : "Sound Active 5",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 39,
                                                "name" : "Sound Active 6",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 85,
                                                            "DMXEndValue" : 85
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 40,
                                                "name" : "Sound Active 7",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 100,
                                                            "DMXEndValue" : 100
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 41,
                                                "name" : "Sound Active 8",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 120,
                                                            "DMXEndValue" : 120 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 42,
                                                "name" : "Sound Active 9",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 135,
                                                            "DMXEndValue" : 135
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 43,
                                                "name" : "Sound Active 10",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 150,
                                                            "DMXEndValue" : 150 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 44,
                                                "name" : "Sound Active 11",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 170,
                                                            "DMXEndValue" : 170 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 45,
                                                "name" : "Sound Active 12",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 180,
                                                            "DMXEndValue" : 180
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 46,
                                                "name" : "Sound Active 13",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 200,
                                                            "DMXEndValue" : 200
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 47,
                                                "name" : "Sound Active 14",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 220,
                                                            "DMXEndValue" : 220 
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 48,
                                                "name" : "Sound Active 15",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },
                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 230,
                                                            "DMXEndValue" : 230
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 49,
                                                "name" : "Sound Active 16",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        
                                                        {
                                                            "DMXRelativeAddress" : 9,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255
                                                        },

                                                        {
                                                            "DMXRelativeAddress" : 10,
                                                            "DMXStartValue" : 255,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },

                                    {
                                        "groupId" : 1,
                                        "name" : "Effect Parameters",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Effect Size",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 11,
                                                            "DMXStartValue" : 0,
                                                            "DMXEndValue" : 255 
                                                        }
                                                    ]
                                                }
                                            }
                                        ] 
                                    },

                                    {
                                        "groupId" : 2,
                                        "name" : "Dimming Curves",
                                        "tiles" : [
                                            {
                                                "tileId" : 0,
                                                "name" : "Standard Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 12,
                                                            "DMXStartValue" : 10,
                                                            "DMXEndValue" : 10
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 1,
                                                "name" : "Stage Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 12,
                                                            "DMXStartValue" : 30,
                                                            "DMXEndValue" : 30
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 2,
                                                "name" : "TV Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 12,
                                                            "DMXStartValue" : 50,
                                                            "DMXEndValue" : 50
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 3,
                                                "name" : "Architectural Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 12,
                                                            "DMXStartValue" : 70,
                                                            "DMXEndValue" : 70
                                                        }
                                                    ]
                                                }
                                            },
                
                                            {
                                                "tileId" : 4,
                                                "name" : "Theatre Dimmer Curve",
                                                "hardwareValues" : {
                                                    "DMXFields" : [
                                                        {
                                                            "DMXRelativeAddress" : 12,
                                                            "DMXStartValue" : 90,
                                                            "DMXEndValue" : 90
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },


    {
  
        "fixtureId" : 2,
        "manufacturer" : "Equinox",
        "name" : "Spetrapix Batten",
        "modes" : [
            {
                "modeId" : 0,
                "name" : "Mode 3.2",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "virtual" : true,
                                "DMXHomeValue" : 255
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },

    {
  
        "fixtureId" : 3,
        "manufacturer" : "Moving Lights",
        "name" : "LED Moving Wash",
        "modes" : [
            {
                "modeId" : 0,
                "name" : "Mode 16",
                "elements" : [
                    {
                        "elementId" : 0,
                        "attributes" : {

                            "intensity" : {
                                "virtual" : true,
                                "DMXHomeValue" : 255
                            },

                            "colour" : {
                                "parameters" : {
                                    "red" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 1,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "green" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 2,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                }
                                            ]
                                        }
                                    },

                                    "blue" : {
                                        "hardwareValues" : {
                                            "DMXFields" : [
                                                {
                                                    "DMXRelativeAddress" : 3,
                                                    "DMXStartValue" : 0,
                                                    "DMXEndValue" : 255,
                                                    "DMXHomeValue" : 255
                                                    
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
]

export default async function handler(req, res) {    
    res.status(200).json({"fixturePool" : FixtureLibrary})
}