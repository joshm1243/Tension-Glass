import React, { useRef } from "react";
import styles from "./ScriptToolbar.module.css";

export default function ScriptToolbar(props) {

    const fileInputRef = useRef(null);

    function handleFileInputClick() {
        fileInputRef.current.click();
    }

    function handleFileUpload(event) {

        const file = event.target.files[0];
    
        if (file && file.type === "text/plain") {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContents = event.target.result;
                props.SwapScript(fileContents);
            };
            reader.readAsText(file);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}></div>
            <div className={styles.buttons}>
                <div onClick={handleFileInputClick}>Upload Script</div>
                <div>Element View</div>
                <div>Output View</div>
                <input 
                    type="file"
                    id="file-input"
                    accept="text/plain"
                    ref={fileInputRef}
                    style={{display: "none"}}
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    )
}