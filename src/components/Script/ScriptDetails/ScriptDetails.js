import styles from "./ScriptDetails.module.css";

export default function ScriptDetails({selectedElement}) {

    const block = selectedElement[0] ? selectedElement[0] : false;
    const line = selectedElement[1] ? selectedElement[1] : false;
    const element = selectedElement[2] ? selectedElement[2] : false;

    var elementElements;
    if (element) {

        // Location
        if (element.type == "location") {
            elementElements = <>
                <div>Type: Location</div>
                <div>Location: {element.location}</div>
                <div></div>            
            </>
        }

        else if (element.type == "emotion") {

            const emotions = element.emotions.map(function(word) {
                return word[0].toUpperCase() + word.substring(1)
            }).join(", ");

            elementElements = <>
                <div>Type: Emotion</div>
                <div>Emotions: {emotions}</div>
                <div></div>
            </>
        }

        else if (element.type == "time_of_day") {

            const time_of_day = element.time_of_day[0].toUpperCase() + element.time_of_day.substring(1);
            
            elementElements = <>
                <div>Type: Time of Day</div>
                <div>Time of Day: {time_of_day}</div>
                <div></div>
            </>

        }

        else if (element.type == "environment") {

            const environment = element.environment[0].toUpperCase() + element.environment.substring(1);
            
            elementElements = <>
                <div>Type: Environment</div>
                <div>Time of Day: {environment}</div>
                <div></div>
            </>

        }

        // Character
        else {
            elementElements = <>
                <div>Type: Character</div>
                <div>Character ID: {element.character_id}</div>
                <div>Character Name: {element.character_name}</div>            
            </>
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Element Selector</div>


            { !block ? <div className={styles.unselected_message}>Select a script element to inspect closer.</div> : null}

            {
        
                element ? (
                    <div>
                        <div className={styles.element_header}>ELEMENT</div>
                        <div className={styles.overview_header}>
                            {elementElements}
                        </div>
                    </div>
                ) : null
            }

            {
                line ? (
                    <div>
                        <div className={styles.element_header}>LINE {line.line_number}</div>
                        <div className={styles.overview_header}>
                            <div>Line Number: {line.line_number}</div>
                            <div>Line Type: {line.type_tag} ({line.type_code})</div>
                            <div></div>
                        </div>
                    </div>
                ) : null
            }

            {
                block ? (
                    <div>
                        <div className={styles.element_header}>BLOCK {block.block_id}</div>
                        <div className={styles.overview_header}>
                            <div>Block Number: {block.block_id}</div>
                            <div>Number of Lines: {block.lines.length}</div>
                            <div></div>
                        </div>
                        <div className={styles.overview_header}>
                            <div>Location: {block.prompt_elements.location}</div>
                            <div>Time of Day: {block.prompt_elements.time_of_day}</div>
                            <div>Environment: {block.prompt_elements.environment}</div>
                            <div>Emotions: {block.prompt_elements.emotions}</div>
                        </div>
                    </div>
                ) : null
            }


        </div>
    )
}