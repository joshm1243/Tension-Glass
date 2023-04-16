import React from 'react'
import GridCell from './GridCell'

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
        <div style={{ display: 'flex' }}>
            {cellElements}
        </div>
    )
}

export default GridRow