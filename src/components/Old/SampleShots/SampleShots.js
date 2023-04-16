import styles from "./SampleShots.module.css"
import ModuleHead from "../ModuleHead/ModuleHead"
import Shot from "./Shot"


export default function StatusGrid(props) {

    return (

        <>
            <ModuleHead colour="#1F1F1F" title="Sample Selection" />
            
            <div className={styles.wrapper}>


                <div className={styles.list_header}>
                    <div>Location</div>
                    <div>In/Out</div>
                    <div>Time</div>
                    <div>Core Emotion</div>
                    <div>Auxiliary Emotion</div>
                    <div>Core Material</div>
                    <div>Auxiliary Material</div>
                    <div>Corpus Line</div>
                </div>

                <div className={styles.list}>

                
                    {
                        props.samples.map(function(sample){
                            return <Sample key={sample.corpusLine} sample={sample} />
                        })
                    }
                  

                </div>
            </div>
        </>
    )
}