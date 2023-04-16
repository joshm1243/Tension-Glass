import { useEffect } from "react";
import RouteList from "../RouteList/RouteList";
import styles from "./RouteContainer.module.css";

export default function RoutingContainer(props) {

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Routing Table</div>

            <div className={styles.table_header}>
                <div>Route ID</div>
                <div>Location</div>
                <div>Environment</div>
                <div>Time of Day</div>
                <div>Emotion 1</div>
                <div>Emotion 2</div>
                <div>Remove</div>
            </div>

            <RouteList routes={props.routes} SelectRoute={props.SelectRoute} AddRoute={props.AddRoute} RemoveRoute={props.RemoveRoute} />

        </div>
    )
}