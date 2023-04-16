import ScriptDetails from "../ScriptDetails/ScriptDetails";
import ScriptToolbar from "../ScriptToolbar/ScriptToolbar";
import styles from "./ScriptSidebar.module.css";

export default function ScriptSidebar({SwapScript, selectedElement}) {

    return (
        <div className={styles.wrapper}>
            <ScriptToolbar SwapScript={SwapScript} />
            <ScriptDetails selectedElement={selectedElement} />
        </div>
    )
}