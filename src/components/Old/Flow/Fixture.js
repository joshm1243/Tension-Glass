import { memo, useRef, useState } from 'react';
import { NodeResizer } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';
import styles from "./Fixture.module.css"

const ResizableNodeSelected = ({ data, selected }) => {

	function SaveFixture(e) {

		let styleInfo = e.sourceEvent.srcElement.parentElement.style;
		let height = parseInt(styleInfo.height.substring(0,styleInfo.height.length - 2))
		let width = parseInt(styleInfo.width.substring(0,styleInfo.width.length - 2))

		data.SaveFlow(data.channel,{height: height, width: width})
		
	}

  	return (
    <>
    	<NodeResizer color="#ff0071" isVisible={selected} onResizeEnd={SaveFixture} minWidth={35} minHeight={25} />	
		<div className={styles.fixture}>
			<div>{data.channel}</div>
		</div>
    </>
  );
};

export default memo(ResizableNodeSelected);