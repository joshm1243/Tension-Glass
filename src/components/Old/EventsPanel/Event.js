import styles from "./Event.module.css"

export default function Event(props) {

    return (
        <div className={styles.wrapper}>

            <div className={styles.message}>{props.event.message}</div>

        </div>
    )

}