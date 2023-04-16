import ModuleHead from "../ModuleHead/ModuleHead";
import styles from "./PatchPanel.module.css"
import Socket from "./Socket";

export default function PatchPanel(props) {

    function UpdateChannel(updatedChannel) {

        // Converting the FixtureName to a FixtureID
        
        props.UpdateChannelPool(props.channels.map((storedChannel) => {
            if (storedChannel.channel == updatedChannel.channel) {
                return {
                    ...storedChannel,
                    address: updatedChannel.address,
                    fixtureId: updatedChannel.name
                }
            }
            else {
                return storedChannel
            }
        }))
    }

    return (
        <>

            <ModuleHead title="Patch Panel" colour="#44ebb9" />

            <div className={styles.wrapper}>
                <div className={styles.fixtures}>

                    {
                        props.channels.map((channel) => {

                            let fixture = props.fixturePool.filter((fixture) => fixture.fixtureId == channel.fixtureId)[0]
                            let fixtureName = ""
                            if (fixture) {
                                fixtureName = fixture.name
                            }

                            return <Socket
                                key={channel.channel} 
                                channel={channel.channel}
                                address={channel.address}
                                name={fixtureName}
                                mode={1}
                                fixturePool={props.fixturePool}
                                UpdateChannel={UpdateChannel}
                            />
                        })
                    }

                </div>
            </div>
        </>
    )
}