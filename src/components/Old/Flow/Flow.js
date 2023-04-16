import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { Background, BackgroundVariant, Controls, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

import Fixture from './Fixture';

const nodeTypes = {
	Fixture : Fixture
};

import styles from "./Flow.module.css"
import ModuleHead from '../ModuleHead/ModuleHead';

export default function Flow(props) {
	
	const [nodes, setNodes, onNodesChange] = useNodesState([]);

	// Props.UpdateChannelPool : Sets the Channels
	// Props.channels : Gets the Channels

	function SaveNodePosition() {

		var updatedChannels = props.channels.map((channel, key) => {

			return {
				...channel,
				focus : {
					positionX : nodes[key].position.x,
					positionY : nodes[key].position.y,
					width : channel.focus.width,
					height : channel.focus.height,
				}
			}
		})

		props.UpdateChannelPool(updatedChannels)

	}

	function SaveNodeSize(channelNumber, size) {

		
		
		var updatedChannels = props.channels.map((channel, key) => {

			if (channel.channel == channelNumber) {

				return {
					...channel,
					focus : {
						positionX: channel.focus.positionX,
						positionY: channel.focus.positionY,
						width : size.width,
						height : size.height,
					}
				}
			}
			else {
				return channel
			}
		})
		
		props.UpdateChannelPool(updatedChannels)
	}

	useEffect(() => {
        var updatedNodes = props.channels.map((channel, key) => {
			
			return {
                id: channel.channel.toString(),
				type: "Fixture",
				data: {
					channel: channel.channel,
					SaveFlow: SaveNodeSize,
				},
				position: {
					x: channel.focus.positionX,
					y: channel.focus.positionY
				},
				style: {
					fontSize: 12,
					width: channel.focus.width,
					height: channel.focus.height
				}
            }
		})

		setNodes(updatedNodes)

	}, [props.channels])

  	return (
		<>
			<ModuleHead title="Focus Layout" colour="#FF5714" />
			<ReactFlow nodes={nodes} onNodesChange={onNodesChange} onResizeEnd={SaveNodePosition} onNodeDragStop={SaveNodePosition} minZoom={0.5} maxZoom={4} fitView nodeTypes={nodeTypes}>
				<Background variant={BackgroundVariant.Dots} />
				<Controls />
			</ReactFlow>		
		</>
  	);
}
