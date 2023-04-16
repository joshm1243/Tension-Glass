import styles from "./SampleSelect.module.css";

export default function SampleSelect(props) {

    return (

        <div className={styles.wrapper}>
            
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Sample Select</div>

            {
                props.displaySample ? (

                    <>
                        <div className={styles.table_row}>
                            <div>Sample ID:</div>
                            {
                                props.selectedSamples.length > 0 ? (
                                    <div>Sample Number:</div>
                                ) : (
                                    <div className={styles.regular_text}>Number of Samples:</div>
                                )
                            }
                            <div onClick={props.CreateSample} className={styles.button}>New Sample</div>
                            {
                                props.selectedSamples.length > 0 ? (
                                    <div onClick={() => {props.DeleteSample(props.selectedSample.sample_id)}} className={styles.button}>Delete Sample</div>
                                ) : (
                                    <div className={styles.offline_button}>Delete Sample</div>
                                )
                            }
                            
                        </div>

                        <div className={styles.table_row}>
                            
                            {
                                props.selectedSamples.length > 0 ? (
                                    <>
                                        <div>{props.selectedRoute.route_id}.{props.selectedSample.sample_id}</div>
                                        <div>{props.sampleIndex} of {props.selectedSamples.length}</div>
                                        <div className={styles.button} onClick={props.PreviousSample}>Previous Sample</div>
                                        <div className={styles.button} onClick={props.NextSample}>Next Sample</div>
                                    </>
                                ) : (
                                    <>
                                        <div>{props.selectedRoute.route_id}</div>
                                        <div>{props.selectedSamples.length}</div>
                                        <div className={styles.offline_button}>Previous Sample</div>
                                        <div className={styles.offline_button}>Next Sample</div>
                                    </>
                                )
                            }
                            
                        </div>
                    </>

                ) : (
                    <div className={styles.no_route_selected}>
                        Select Route to Continue.
                    </div>
                )
            }

        </div>
    )
}