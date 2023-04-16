import React from 'react'
import ModuleHead from '../ModuleHead/ModuleHead'
import GridRow from './GridRow'

const Grid = ({ samples, currentSampleId }) => {



	var gridElements;
	if (samples.length > 0) {
		gridElements = samples[currentSampleId].grid;
	}
	else {
		gridElements = Array(10).fill().map(() => Array(10).fill("#000000"));
	}

	const rows = gridElements.map((rowElements,index) => {
		return <GridRow key={index} rowElements={rowElements} rowLabel={String.fromCharCode(index + 65)} />
	})

  	return (
    	<>
      		<ModuleHead title="Sample Grid" colour="#111111" />
      		<div>
            	{rows}   
      		</div>
    	</>
  	)
}

export default Grid;