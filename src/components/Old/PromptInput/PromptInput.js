import React, { useState, useEffect } from "react";
import ModuleHead from "../ModuleHead/ModuleHead";

import styles from "./PromptInput.module.css"

export default function PromptInput(props) {

    const [promptInputText, setPromptInputText] = useState("")
    const changePromptInputText = (e) => {
		setPromptInputText(e.target.value)
	}

    const GetPromptInputDesign = async (e) => {

		e.preventDefault()

		let res = await fetch("http://127.0.0.1:3000/api/cosmos/generate", {
			method : "POST",
			body : JSON.stringify({"text" : promptInputText}),
		});

		if (res.ok) {
			let body = await res.json()
            props.updateChannelParameters(body.samples)
		}
	};

    return (
        <>
            <ModuleHead title="Prompt Input" colour="#B118C8" />
            <div className={styles.wrapper}>
                <div className={styles.prompt}>
                    <input type="text" id="textPrompt" value={promptInputText} onChange={changePromptInputText} />
                    <button type="submit" onClick={GetPromptInputDesign}>Set Design</button>
                </div>
            </div>
        </>
    )
}
