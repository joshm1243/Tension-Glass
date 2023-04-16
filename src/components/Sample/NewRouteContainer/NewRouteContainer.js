import { useState, useEffect } from "react";
import styles from "./NewRouteContainer.module.css";

export default function NewRouteContainer({route, UpdateRoute}) {

    const [fields, setFields] = useState({
        route_id: "",
        location: "",
        environment: "",
        time_of_day: "",
        emotion_1: "",
        emotion_2: ""
    });

    var show_fields = false;

    useEffect(() => {

        if (route.route_id) {
            setFields(route);
        }

    },[route]);
    
    const UpdateField = (fieldName, updatedValue) => {

        var updatedRoute = {
          ...fields,
          [fieldName]: updatedValue
        };

        setFields(updatedRoute);
        UpdateRoute(updatedRoute);
    };

    return (

        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Change Route Details</div>

            {
                route.route_id ? (
                    <>
                        <div className={styles.table_header}>
                            <div>Route ID</div>
                            <div>Location</div>
                            <div>Environment</div>
                        </div>
                        <div className={styles.table_row}>
                            <div>{route.route_id}</div>
                            <div><input value={fields.location} onChange={e => UpdateField('location', e.target.value)}  /></div>
                            <div><input value={fields.environment} onChange={e => UpdateField('environment', e.target.value)} /></div>
                        </div>
                        <div className={styles.table_header}>
                            <div>Time of Day</div>
                            <div>Emotion 1</div>
                            <div>Emotion 2</div>
                        </div>
                        <div className={styles.table_row}>
                            <div><input value={fields.time_of_day} onChange={e => UpdateField('time_of_day', e.target.value)} /></div>
                            <div><input value={fields.emotion_1} onChange={e => UpdateField('emotion_1', e.target.value)} /></div>
                            <div><input value={fields.emotion_2} onChange={e => UpdateField('emotion_2', e.target.value)} /></div>
                        </div>
                    </>
                ) : <div className={styles.no_route_message}>Select Route To Continue.</div>
            }




        </div>
    )
}