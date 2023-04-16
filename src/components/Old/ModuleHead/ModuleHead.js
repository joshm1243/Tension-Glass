import styles from "./ModuleHead.module.css"

export default function ModuleHead(props) {

    return (
        <div className={styles.wrapper}>

            <div className={styles.colour} style={{backgroundColor: props.colour}}></div>
            <div className={styles.title}>{props.title}</div>

        </div>
    )
}