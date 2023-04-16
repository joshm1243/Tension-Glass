import styles from "./Shot.module.css";

export default function Sample(props) {

    return (

        <div >
        
            <div className={styles.wrapper}>
                <div>{props.sample.location}</div>
                <div>{props.sample.inout}</div>
                <div>{props.sample.time}</div>
                <div>{props.sample.coreEmotion}</div>
                <div>{props.sample.auxiliaryEmotion}</div>
                <div>{props.sample.coreMaterial}</div>
                <div>{props.sample.auxiliaryMaterial}</div>
                <div>{props.sample.corpusLine}</div>
            </div>
        </div>
    )
}