import GridRow from './GridRow'


export default function SampleGrid(props) {

  	return (
	
		<div>
			{
				
				props.gridValues.map((rowElements, index) => {
					return (
						<GridRow
							key={index}
							rowElements={rowElements}
							rowLabel={String.fromCharCode(index + 65)}
						/>
					)
				})
			}
		</div>

  	)
}
