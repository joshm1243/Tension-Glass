import ModuleHead from "../ModuleHead/ModuleHead"
import styles from "./SampleDetails.module.css"

export default function StatusGrid(props) {

    var statusCode = ""
    var prompt = ""
    var location = ""
    var inout = ""
    var time = ""
    var coreEmotion = ""
    var auxiliaryEmotion = ""
    var coreMaterial = ""
    var auxiliaryMaterial = ""
    var corpusLine = ""
    var subId = ""
    var routeId = ""

    if (props.samples.length > 0) {
        prompt = props.samples[props.currentSampleId].prompt
        location = props.samples[props.currentSampleId].location
        inout = props.samples[props.currentSampleId].in_out
        time = props.samples[props.currentSampleId].time_of_day
        coreEmotion = props.samples[props.currentSampleId].core_emotion
        auxiliaryEmotion = props.samples[props.currentSampleId].auxiliary_emotion
        coreMaterial = props.samples[props.currentSampleId].core_material
        auxiliaryMaterial = props.samples[props.currentSampleId].auxiliary_material
        corpusLine = props.samples[props.currentSampleId].corpus_line
        subId = props.samples[props.currentSampleId].sub_id
        routeId = props.samples[props.currentSampleId].route_id
        statusCode =  routeId + "." + corpusLine + "." + subId

    
    }

    return (

        <>
            <ModuleHead colour="#1F1F1F" title="Sample Details" />
            <div className={styles.wrapper}>

                <div className={styles.header}>

                    <div className={styles.code}>{statusCode}</div>
                    <div className={styles.prompt}>{prompt}</div>

                </div>

                <div className={styles.shots}>

                    <div>
                        <div className={styles.name}>Location</div>
                        <div className={styles.value}>{location}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>In / Out</div>
                        <div className={styles.value}>{inout}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>Time</div>
                        <div className={styles.value}>{time}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>Core Emotion</div>
                        <div className={styles.value}>{coreEmotion}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>Auxiliary Emotion</div>
                        <div className={styles.value}>{auxiliaryEmotion}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>Core Material</div>
                        <div className={styles.value}>{coreMaterial}</div>
                    </div>

                    
                    <div>
                        <div className={styles.name}>Auxiliary Material</div>
                        <div className={styles.value}>{auxiliaryMaterial}</div>
                    </div>

                </div>
            </div>
        </>
    )
}