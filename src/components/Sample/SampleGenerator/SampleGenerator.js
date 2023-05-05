import { useEffect, useState } from "react";
import styles from "./SampleGenerator.module.css";


export default function SampleGenerator({routes}) {


    const [grid, setGrid] = useState([]);

    useEffect(() => {
        var gridValues = []
        for (let i = 0; i < 2500; i++) {
            const hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
            console.log(hexCode)
            gridValues.push(hexCode);
        }
    
        setGrid(gridValues);

    },[])




    const [fields, setFields] = useState({
        location: "",
        environment: "",
        time_of_day: "",
        emotion_1: "",
        emotion_2: ""
    });

    const [chosenRoute, setChosenRoute] = useState("")

    const UpdateField = (fieldName, updatedValue) => {

        var updatedFields = {
          ...fields,
          [fieldName]: updatedValue
        };

        setFields(updatedFields);
    };

    async function Route() {

        var longest_match = 0;

        routes.map((route) => {
            var prompt_elements = [fields.location, fields.environment, fields.time_of_day, fields.emotion_1, fields.emotion_2]
            var route_elements = [route.location, route.environment, route.time_of_day, route.emotion_1, route.emotion_2]
            var amount_matched = 0;

            for (let i = 0; i < parseInt(route.mask); i++) {
                if (prompt_elements[i] == route_elements[i]) {
                    amount_matched = i + 1
                    if (amount_matched > longest_match) {
                        longest_match += 1;
                    }
                }
            }

            route.amount_matched = amount_matched
        })

        console.log(routes)

        const longest_routes = routes.filter((route) => {
            return route.amount_matched == longest_match;
        })

        if (longest_routes.length > 0) {

            const selected_route = longest_routes[0];
            const route_elements = [
                selected_route.location, 
                selected_route.environment, 
                selected_route.time_of_day, 
                selected_route.emotion_1, 
                selected_route.emotion_2
            ]

            var prompt = route_elements.join("_");
            setChosenRoute(selected_route.route_id);

            try {

                const response = await fetch("http://127.0.0.1:3000/api/cosmos/designs/generate", {
                    method: "POST",
                    body: JSON.stringify({"prompt" : prompt})
                })

                const body = await response.json();

                setGrid(body.sample_values)

            }
            catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Sample Generator</div>

            <div className={styles.table_header}>
                <div>Location</div>
                <div>Environment</div>
                <div>Time of Day</div>
            </div>

            <div className={styles.table_row}>
                <div><input value={fields.location} onChange={e => UpdateField('location', e.target.value)} /></div>
                <div><input value={fields.environment} onChange={e => UpdateField('environment', e.target.value)} /></div>
                <div><input value={fields.time_of_day} onChange={e => UpdateField('time_of_day', e.target.value)} /></div>
            </div>

            <div className={styles.table_header}>
                <div>Emotion 1</div>
                <div>Emotion 2</div>
                <div>Selected Route</div>
            </div>

            <div className={styles.table_row}>
                <div><input value={fields.emotion_1} onChange={e => UpdateField('emotion_1', e.target.value)} /></div>
                <div><input value={fields.emotion_2} onChange={e => UpdateField('emotion_2', e.target.value)} /></div>
                <div className={styles.matched_routes}>{chosenRoute}</div>
            </div>

            <div className={styles.table_row}>
                <div className={styles.generate_sample_button}><div onClick={Route}>Generate Sample</div></div>
                <div>Generation Progress: 10%</div>
                <div></div>
            </div>
            
            <div className={styles.heading_colour_bar}></div>

            <div className={styles.table_header}>
                <div>Created Sample</div>
            </div>

            <div className={styles.grid_container}>

                <div className={styles.grid}>

                    {
                        grid.map((tile, index) => {
                            return <div key={index} style={{
                                backgroundColor: tile,
                            }}></div>
                        })
                    }

                </div>

            </div>
    
                
        </div>
    )
}
