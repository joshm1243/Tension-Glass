import styles from "./SampleSelection.module.css"

export default function SampleSelection(props) {

    return (
        <div className={styles.wrapper}>
            <div onClick={props.HandlePreviousSample}>Previous Sample</div>
            <div onClick={props.HandleNextSample}>Next Sample</div>
        </div>
    )
}