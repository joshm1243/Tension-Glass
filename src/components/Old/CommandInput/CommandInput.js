import ModuleHead from "../ModuleHead/ModuleHead"
import styles from "./CommandInput.module.css"

export default function PromptInput(props) {




    return (

        <>
            
            <ModuleHead title="Command Input" colour="#FF3366"/>
            <div className={styles.wrapper}>
                <div className={styles.input}>
                    <input type="text" id="" />
                </div>
            </div>

        
        </>
    )
}
