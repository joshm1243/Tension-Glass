import CommandInput from "../CommandInput/CommandInput";
import SampleGrid from "../SampleGrid/SampleGrid";
import styles from "./SampleContainer.module.css";


export default function SampleContainer(props) {

    
	const colours = {
        "d1" : "#46ba18",
        "d2" : "#368f13",
        "d3" : "#296e0e",
        "d4" : "#245e0c",
        "r1" : "#FF0000",
        "r2" : "#FF2A00",
        "r3" : "#FF3C00",
        "r4" : "#FF5500",
        "o1" : "#FF6A00",
        "o2" : "#FF8800",
        "o3" : "#FFA200",
        "o4" : "#FFB700",
        "y1" : "#FFD500",
        "y2" : "#FFEA00",
        "y3" : "#FFFF00",
        "y4" : "#EEFF00",
        "l1" : "#D0FF00",
        "l2" : "#BBFF00",
        "l3" : "#A2FF00",
        "l4" : "#91FF00",
        "g1" : "#00FF00",
        "g2" : "#6AFF00",
        "g3" : "#44FF00",
        "g4" : "#00FF11",
        "t1" : "#00FF77",
        "t2" : "#00FF84",
        "t3" : "#00FFA2",
        "t4" : "#00FFB3",
        "c1" : "#00FFD5",
        "c2" : "#00FFEE",
        "c3" : "#00F2FF",
        "c4" : "#00D0FF",
        "s1" : "#00AEFF",
        "s2" : "#0099FF",
        "s3" : "#0084FF",
        "s4" : "#0073FF",
        "b1" : "#0000FF",
        "b2" : "#001EFF",
        "b3" : "#0000FF",
        "b4" : "#2F00FF",
        "u1" : "#6A00FF",
        "u2" : "#9000FF",
        "u3" : "#A600FF",
        "u4" : "#C300FF",
        "p1" : "#F200FF",
        "p2" : "#FF00E6",
        "p3" : "#FF00C3",
        "p4" : "#FF00A6",
        "i1" : "#FF0062",
        "i2" : "#FF0040",
        "i3" : "#FF001E",
        "i4" : "#FF0004",
        "bl" : "#000000",
        "wh" : "#FFFFFF"
    }

    function UpdateGrid(command) {
            
        const input = command.trim()
        const startRow = input.substring(0, 1);
        const startCol = input.substring(1, 2);
        const endRow = input.substring(3,4);
        const endCol = input.substring(4,5);
        const colourName = input.substring(6).trim();

        const startRowIndex = parseInt(startRow.charCodeAt(0) - 65);
        const startColIndex = parseInt(startCol.charCodeAt(0) - 65);
        const endRowIndex = parseInt(endRow.charCodeAt(0) - 65);
        const endColIndex = parseInt(endCol.charCodeAt(0) - 65);

        const backgroundColour = colours[colourName];

        var newGridData = [...JSON.parse(props.selectedSample.grid)];

        for (let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++) {
            for (let colIndex = startColIndex; colIndex <= endColIndex; colIndex++) {
                newGridData[rowIndex][colIndex] = backgroundColour
            }
        }

        var updatedSample = {
            ...props.selectedSample,
            grid : JSON.stringify(newGridData)
        }

        props.UpdateSample(updatedSample);

    }


    var elements;
    var gridValues;

    if (props.displaySample ) {

        if (props.selectedSample.grid && props.selectedSample.grid.length > 0) {
            gridValues =  JSON.parse(props.selectedSample.grid);
            elements = (
                <div>
                    <SampleGrid 
                        className={styles.grid} 
                        gridValues={gridValues}
                    />
                    <CommandInput
                        colours={colours}
                        UpdateGrid={UpdateGrid}
                        NextSample={props.NextSample}
                        PreviousSample={props.PreviousSample}
                    />
                </div>
            )
        }
        else {
            elements = (
            
                <div className={styles.create_sample_message}>Create Sample to Continue.</div>
         
            )
        }
    }
    else {
        elements = (
            <div className={styles.create_sample_message}>Select Route to Continue.</div>
    
        )
    }

    return (
        <div className={styles.wrapper}>
                
            <div className={styles.bar}></div>
            <div className={styles.module_title}>Sample Modifier</div>
            
            {elements}

        </div>
    )
}