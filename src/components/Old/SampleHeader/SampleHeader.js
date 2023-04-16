import styles from "./SampleHeader.module.css"

export default function StatusGrid(props) {

    return (
        <div className={styles.wrapper}>
            <div>Sample Services</div>
            <div>10.3.1</div>
        </div>
    )
}