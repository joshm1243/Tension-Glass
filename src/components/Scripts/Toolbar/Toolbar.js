import styles from "./Toolbar.module.css"



export default function Toolbar(props) {

    const sendScript = async (script) => {

        let res = await fetch("http://127.0.0.1:3000/api/cosmos/script", {
            method: "POST",
            body: JSON.stringify({"script" : script})
        })
    
        let data = await res.json();
        let lines_markup = data.lines_markup;

        props.updateMarkedScript(lines_markup);
    
    }
    
    const handleScriptUpload = (event) => {
        const file = event.target.files[0];
    
        if (file && file.type === "text/plain") {
            const reader = new FileReader();
            reader.onload = (event) => {
                const contents = event.target.result;
                sendScript(contents);
            };
            reader.readAsText(file);
        }
    }

    return (

        <div className={styles.wrapper}>
            
            <input className={styles.upload_script} type="file" accept=".txt" onChange={handleScriptUpload} />
  
        </div>

    )
}