import React from 'react'
import GridCell from './GridCell'

import styles from "./GridRow.module.css";

const GridRow = ({ rowElements, rowLabel }) => {

    const cellElements = rowElements.map((colour, index) => {

        return <GridCell
            key={index}
            rowLabel={rowLabel}
            colLabel={String.fromCharCode(index + 65)}
            backgroundColour={colour}

        />
    })

    return (
        <div className={styles.wrapper}>
            {cellElements}
        </div>
    )
}

export default GridRow;

