import ScriptBlock from "../ScriptBlock/ScriptBlock";
import styles from "./ScriptContainer.module.css";

export default function ScriptContainer({ TSML, SelectElement }) {

    const blocks = TSML.blocks ? TSML.blocks : [];

    return (
        <div className={styles.wrapper}>
            

            {
                
                blocks.map(block => {
                    return <ScriptBlock key={block.block_id} block={block} SelectElement={SelectElement} />
                })
            }


        </div>
    )
}