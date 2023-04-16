import styles from "./../styles/Scripts.module.css";


import Navigation from "@/components/Navigation/Navigation";
import Script from "@/components/Scripts/Script/Script";
import Toolbar from "@/components/Scripts/Toolbar/Toolbar";
import { useState } from "react";
import ModuleHead from "@/components/Old/ModuleHead/ModuleHead";


export default function Scripts() {

    const [markedScript, setMarkedScript] = useState([])

    function UpdateMarkedScript(tagged_lines) {
        setMarkedScript(tagged_lines)
    }

    return (

        <div>

            <Navigation />

            <div className={styles.wrapper}>
                
                <div className={styles.script_wrapper}>
                    
                    <Toolbar updateMarkedScript={UpdateMarkedScript} />
                    <Script markedScript={markedScript} />

                </div>
                                
                <div>

                </div>
                
            </div>


        </div>

    )
}
