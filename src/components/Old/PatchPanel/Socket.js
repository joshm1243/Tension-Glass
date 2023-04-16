import { useState } from "react"
import Dropdown from "./Dropdown";
import styles from "./Socket.module.css"

export default function Socket(props) {

    const [addressInput, setAddressInput] = useState(props.address) 
    function ChangeAddressInput(e) { setAddressInput(e.target.value); }

    const [fixtureName, setFixtureName] = useState(props.name);
    function ChangeFixture(fixtureName) { 
        setFixtureName(fixtureName);
        UpdateChannel();
    }

    // Close the address input box, and save the typed input
    function UpdateChannel() {

        // Translate the Fixture Name to a FixtureID


        props.UpdateChannel({
            channel: props.channel,
            address: parseInt(addressInput),
            mode: 0,
            name: fixtureName
        })
    }



    
    return (

        <div className={styles.wrapper}>
            <div className={styles.channel_title}>Channel</div>
            <div className={styles.channel_value}>{props.channel}</div>
            <div className={styles.address_title}>Address</div>
            <div className={styles.address_value}>
                <input maxLength="4" value={addressInput} onChange={ChangeAddressInput} onBlur={UpdateChannel} />
            </div>
            <div className={styles.mode_title}>Mode</div>
            <div className={styles.mode_value}>{props.mode}</div>

            <div className={styles.name_value}>
                <Dropdown 
                    selectedFixture={props.name}
                    fixtureNames={[]}
                    ChangeFixture={ChangeFixture}
                />
            </div>
            
        </div>
    )
}