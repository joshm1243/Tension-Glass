import React from 'react'

function DimHex(hex, amount) {
	// Convert hex value to RGB
	const r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	const b = parseInt(hex.substring(5, 7), 16);

	if (r == 0 && g == 0 && b == 0) {
		var newR = Math.max(r + amount, 0);
		var newG = Math.max(g + amount, 0);
		var newB = Math.max(b + amount, 0);
	}
	else {
		// Darken each RGB value by the specified amount
		var newR = Math.max(r - amount, 0);
		var newG = Math.max(g - amount, 0);
		var newB = Math.max(b - amount, 0);
	}
  	
	// Convert the new RGB values back to hex
	const newHex = '#' + [newR, newG, newB].map(c => {
	  const hex = c.toString(16);
	  return hex.length === 1 ? '0' + hex : hex;
	}).join('');
  
	return newHex;
}

const GridCell = ({ backgroundColour, colLabel, rowLabel }) => {


  const style = {
    backgroundColor: backgroundColour,
    color: DimHex(backgroundColour,16),
  }

  return (
    <div style={style}>{rowLabel + colLabel}</div>
  )
}

export default GridCell