import styles from "./NetworkStatus.module.css";

export default function NetworkStatus(props) {

    return (

        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Network Status</div>

            <div className={styles.table_row}>
                <div>Status: Learning</div>
                <div>Progress: </div>
                <div>Last Trained: Now</div>
                <div>Total Samples: {props.samples.length}</div>
                <div className={styles.button} onClick={props.Learn}>Learn Samples</div>
            </div>

            

        </div>
    )
}