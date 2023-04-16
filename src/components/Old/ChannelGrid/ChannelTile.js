import styles from "./ChannelTile.module.css"

export default function ChannelTile(props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.channel}>{props.tile.channel}</div>
            <div className={styles.colour}>{props.tile.colour}</div>
            <div className={styles.param_red}>{props.tile.param_red}</div>
            <div className={styles.param_green}>{props.tile.param_green}</div>
            <div className={styles.param_blue}>{props.tile.param_blue}</div>
            <div className={styles.info}>{props.tile.info}</div>
        </div>
    )
}