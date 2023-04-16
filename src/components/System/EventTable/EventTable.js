import { useEffect, useState } from "react";
import styles from "./EventTable.module.css";

export default function EventTable(props) {

    const [events, setEvents] = useState([]);




    async function PingCosmos() {

        let res = await fetch("http://127.0.0.1:3000/api/cosmos/ping", {
            method: "GET",
        })
    
        if (res.status == 200) {

            var updatedEvents = events;
            updatedEvents.push({
                "timestamp" : 10,
                "type" : "Information",
                "name" : "Cosmos Connection",
                "status" : "Connected"
            })

            setEvents(updatedEvents)
        }

        else {
            
            var updatedEvents = events;
            updatedEvents.push({
                "timestamp" : 10,
                "type" : "Information",
                "name" : "Cosmos Connection",
                "status" : "Disconnected"
            })

            setEvents(updatedEvents)

        }
    }


    return (
        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Event Table</div>

            <div className={styles.table_header}>
                <div>Time</div>
                <div>Type</div>
                <div>Event Name</div>
                <div>Status</div>
            </div>

            {
                events.map((event, index) => {
                    return (
                        <div className={styles.table_row} key={index}>
                            <div>{event.timestamp}</div>
                            <div>{event.type}</div>
                            <div>{event.name}</div>
                            <div>{event.status}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}