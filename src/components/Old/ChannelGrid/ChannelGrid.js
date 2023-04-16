import ModuleHead from "../ModuleHead/ModuleHead"
import styles from "./ChannelGrid.module.css"
import ChannelTile from "./ChannelTile"

export default function ChannelGrid(props) {

    return (
        <>
            <ModuleHead title="Channel Grid" colour="#52B788" />
            <div className={styles.wrapper}>
                <div className={styles.channel_tiles}>

                    {
                        props.channels.map((channel) => <ChannelTile key={channel.channel} tile={channel} />)
                    }

                </div>
            </div>
        </>
    )
}