import { useEffect, useState } from "react"
import { Handle } from "reactflow"
import styles from "./CommandInput.module.css"

export default function CommandInput(props) {

    var colourNames = Object.keys(props.colours)

    const [commandInput, setCommandInput] = useState("")

    function ValidColourPrefix(prefix) {
        for (let i = 0; i < colourNames.length; i++) {
            if (colourNames[i].startsWith(prefix)) {
                return true;
            }
        }
        return false;
    }

    function ValidCoordinate(letter) {
        const validChar = /^[A-J0-4]$/;
        return validChar.test(letter)
    }

    function HandleChange(e) {

        e.preventDefault()

        let input = e.target.value;
        let upperKey = e.key.toUpperCase()

        if (upperKey == "BACKSPACE") {
            if (input.length == 3 || input.length == 6) {
                setCommandInput(commandInput.slice(0,-2))
            }
            else {
                setCommandInput(commandInput.slice(0,-1))
            }
        }
        else if (upperKey == "ENTER") {
            props.NextSample()
        }
        else if (upperKey == "ARROWRIGHT") {
            props.NextSample()
        }
        else if (upperKey == "ARROWLEFT") {
            props.PreviousSample()
        }
        else if (input.length == 0 && ValidCoordinate(upperKey)) {
            setCommandInput(upperKey)
        }
        else if (input.length == 1 && ValidCoordinate(upperKey)) {
            setCommandInput(input + upperKey + " ")
        }
        else if (input.length == 3 && ValidCoordinate(upperKey)) {
            setCommandInput(input + upperKey)
        }
        else if (input.length == 4 && ValidCoordinate(upperKey)) {
            setCommandInput(input + upperKey + " ")    
        }
        else if (input.length > 5) {

            if (colourNames.includes((input + e.key).substring(6))) {
                let command = input + e.key;
                props.UpdateGrid(command)
                setCommandInput("")
            }
            else if (input.length > 5 && ValidColourPrefix((input + e.key).substring(6))) {
                setCommandInput(input + e.key)
            }
        }
    }

    return (
        <>
            <div className={styles.wrapper}>

                <input
                    className={styles.command_input}
                    value={commandInput}
                    placeholder="Command Input"
                    onChange={e => setCommandInput(e.target.value)}
                    onKeyDown={HandleChange}
                />
            </div>

        </>

    )
}