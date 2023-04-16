import styles from "./Script.module.css";

function ExpandLineTrack(track,size) {

    var expandedTrack = Array(size).fill("")

    // tn - Track Number
    for (let tn = 0; tn < track.length; tn++) {

        for (let pos = track[tn].start_index; pos <= track[tn].end_index; pos++) {
            expandedTrack[pos] = "."
        }
    }

    return expandedTrack
}

export default function Script(props) {

    return (

        <div className={styles.wrapper}>

            {

                console.log(props.markedScript)

            }

            {

                // Per Line
                props.markedScript.map((line,key) => {

                

                    var line_elements = []

                    if (line.line_type == "location") {

                        const locationTrack = ExpandLineTrack(line.location.tracks,line.line_array.length)
                        const inoutTrack = ExpandLineTrack(line.in_out.tracks,line.line_array.length)
                        const timeOfDayTrack = ExpandLineTrack(line.time_of_day.tracks,line.line_array.length)

                        line.line_array.map((word,key) => {

                            if (locationTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_location}>{word} </span>)
                            }
                            else if (inoutTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_in_out}>{word} </span>)
                            }
                            else if (timeOfDayTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_time_of_day}>{word} </span>)
                            }
                            else {
                                line_elements.push(<span key={key}>{word} </span>)
                            }
                        })


                        return (
                            <div className={styles.line_location} key={key}>
                                {line_elements}
                            </div>
                        )
                    }

                    else if (line.line_type == "dialogue") {

                        const nameTrack = ExpandLineTrack(line.name.tracks,line.line_array.length)
                        const colourTrack = ExpandLineTrack(line.colour.tracks,line.line_array.length)
                        const toneTrack = ExpandLineTrack(line.tone.tracks,line.line_array.length)
                        const actionTrack = ExpandLineTrack(line.action.tracks,line.line_array.length)
                        
                        line.line_array.map((word,key) => {

                            if (nameTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_name}>{word} </span>)
                            }
                            else if (colourTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_colour}>{word} </span>)
                            }
                            else if (toneTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_tone}>{word} </span>)
                            }
                            else if (actionTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_action}>{word} </span>)
                            }
                            else {
                                line_elements.push(<span key={key}>{word} </span>)
                            }
                        })

                        return (
                            <div key={key} className={styles.line_dialogue}>
                                {line_elements}
                            </div>
                        )


                    }

                    else if (line.line_type == "lighting") {

                        const colourTrack = ExpandLineTrack(line.colour.tracks,line.line_array.length)
                        
                        line.line_array.map((word,key) => {

                            if (colourTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_colour}>{word} </span>)
                            }
                            else {
                                line_elements.push(<span key={key}>{word} </span>)
                            }
                        })

                        return (
                            <div key={key}>
                                {line_elements}
                            </div>
                        )
                    }

                    if (line.line_type == "change") {

                        const locationTrack = ExpandLineTrack(line.location.tracks,line.line_array.length)
                        const nameTrack = ExpandLineTrack(line.name.tracks,line.line_array.length)

                        line.line_array.map((word,key) => {

                            if (locationTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_location}>{word} </span>)
                            }
                            else if (nameTrack[key] == ".") {
                                line_elements.push(<span key={key} className={styles.word_name}>{word}</span>)
                            }
                            else {
                                line_elements.push(<span key={key}>{word} </span>)
                            }
                        })

                        return (
                            <div className={styles.line_change} key={key}>
                                {line_elements}
                            </div>
                        )
                    }

                    
                    else {


                        line.line_array.map((word,key) => {
                            line_elements.push(<span key={key}>{word} </span>)
                        })

                        return (
                            <div className={styles.line_regular} key={key}>
                                {line_elements}
                            </div>
                        )
                    }
                })
            }

        </div>
    )
}



