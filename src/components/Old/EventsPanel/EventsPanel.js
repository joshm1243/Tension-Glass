import ModuleHead from "../ModuleHead/ModuleHead"
import Event from "./Event"
import styles from "./EventsPanel.module.css"

export default function EventsPanel(props) {

    return (

        <>
        
            <ModuleHead title="Event Panel" colour="#000000" />
            <div className={styles.wrapper}>

                <div className={styles.events}>

                

                </div>
            </div>

        </>


    )
}