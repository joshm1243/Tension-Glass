import { useState } from "react"
import styles from "./Dropdown.module.css"

export default function Dropdown(props) {

    const [selectValue, setSelectValue] = useState(props)

    function ChangeFixture(e) {
        setSelectValue(e.target.value)
        props.ChangeFixture(e.target.value)
    }

    return (
        <>
            <select value={selectValue} onChange={ChangeFixture} className={styles.wrapper}>
                <option>Mega Tripar Profile Plus</option>
                <option>Mega Hex Par</option>
                <option>Spetrapix Batten</option>
                <option>Robe Mega Pointie</option>
            </select>
        </>
    )
}