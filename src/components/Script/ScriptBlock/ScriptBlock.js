import styles from "./ScriptBlock.module.css";

export default function ScriptBlock({block, SelectElement}) {


    var lineElements = []

    block.lines.map(line => {

        var track = line.track;

        var textElements = [];
        track.map((instance, key) => {

            if (instance.type == "character") {
                textElements.push(
                    <span key={key} onClick={() => SelectElement([block,line,instance])} className={styles.element_character}>{instance.text}</span>
                )
            }
            else if (instance.type == "location") {
                textElements.push(
                    <span key={key} onClick={() => SelectElement([block,line,instance])} className={styles.element_location}>{instance.text}</span>
                )
            }
            else if (instance.type == "emotion") {
                textElements.push(
                    <span key={key} onClick={() => SelectElement([block,line,instance])} className={styles.element_emotion}>{instance.text}</span>
                )
            }
            else if (instance.type == "time_of_day") {
                textElements.push(
                    <span key={key} onClick={() => SelectElement([block,line,instance])} className={styles.element_time_of_day}>{instance.text}</span>
                )
            }
            else if (instance.type == "environment") {
                textElements.push(
                    <span key={key} onClick={() => SelectElement([block,line,instance])} className={styles.element_environment}>{instance.text}</span>
                )
            }
            else {
                textElements.push(
                    <span key={key}>{instance.text}</span>
                )
            }
        })
        
        lineElements.push(

            <div key={line.line_id} className={styles.line}>
                <div className={styles.line_1} onClick={() => SelectElement([block,line])}>{line.line_number}</div>
                <div className={styles.line_2}>{line.type_code}</div>
                <div className={styles.line_3}>

                    {textElements}
                  
                </div>
            </div>
        )
    })



    return (
        <div className={styles.wrapper}>

            <div className={styles.bar}></div>

            <div className={styles.header} onClick={() => SelectElement([block])}>
                <div className={styles.header_1}>BLK{block.block_id}</div>
                <div className={styles.header_2}>Block Title</div>
            </div>

            {lineElements}

        </div>
    )

}