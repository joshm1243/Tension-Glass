import ModuleHead from "../ModuleHead/ModuleHead"
import styles from "./PatchSocket.module.css"

export default function PatchSocket(props) {

    return (
        <>
            <ModuleHead title="Patch Socket" colour="E4FF1A" />
            <div className={styles.wrapper}>
                This is a patch socket
            </div>
        </>
    )

}