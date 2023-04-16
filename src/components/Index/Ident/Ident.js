import { useState } from "react"
import styles from "./Ident.module.css"

export default function Ident(props) {


    return (

        <>
            <div className={styles.wrapper}>

                <div className={styles.ident}>

                    <div className={styles.tension_heading}>
                        Tension
                    </div>

                    <div className={styles.tension_subheading}>
                        Glass
                    </div>

                    <div className={styles.tension_info}>
                        Waiting for Cosmos and Ignite
                    </div>

                </div>

                <div className={styles.version}>
                    Version 1.3
                </div>

            </div>

        </>

    )
}