import Navigation from "@/components/Navigation/Navigation";
import ScriptContainer from "@/components/Script/ScriptContainer/ScriptContainer";
import ScriptSidebar from "@/components/Script/ScriptSidebar/ScriptSidebar";
import ScriptNavigation from "@/components/Script/ScriptNavigation/ScriptNavigation";
import { useState } from "react";

export default function Script(props) {

    const [TSML, setTSML] = useState([])

    // selectedElement will be an array consisting of a maximum of three eements
    // 0: The Block
    // 1: The Line
    // 2: The Element
    const [selectedElement, setSelectedElement] = useState([])

    async function SwapScript(scriptContents) {

        let res = await fetch("http://127.0.0.1:3000/api/script", {
            method: "POST",
            body: JSON.stringify({"script" : scriptContents})
        })
    
        if (res.status == 200) {
            let data = await res.json();
            setTSML(data.data);
        }

        else {
            console.log("Error.")
        }
    }

    return (
        <>
        
            <Navigation />
            <ScriptNavigation />

            <div style={{display:"flex"}}>

                <div style={{flex:1}}>
                    <ScriptSidebar SwapScript={SwapScript} selectedElement={selectedElement} />
                </div>

                <div style={{flex:1, height:"calc(100vh - 129px)",overflowY:"auto"}}>
                    <ScriptContainer TSML={TSML} SelectElement={setSelectedElement} />
                </div>

            </div>


        
        </>
    )
}