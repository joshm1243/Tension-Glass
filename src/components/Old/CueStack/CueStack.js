import ModuleHead from "../ModuleHead/ModuleHead"
import styles from "./CueStack.module.css"
import Cue from "./Cue"

export default function CueStack(props) {

    return (

        <>
        
            <ModuleHead title="Cue Stack" colour="#69EBD0" />
            <div className={styles.wrapper}>

                
                <Cue />
                <Cue />
                <Cue />
                <Cue />
                <Cue />


            </div>

        </>
    )
}