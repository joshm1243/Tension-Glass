import Navigation from "@/components/Navigation/Navigation";
import EventTable from "@/components/System/EventTable/EventTable";
import SystemNavigation from "@/components/System/SystemNavigation/SystemNavigation";
import { useState } from "react";

export default function System(props) {


    return (
        <>
        
            <Navigation />
            <SystemNavigation />

            <div style={{display:"flex"}}>

                <div style={{flex:1}}>
                    <EventTable />
                </div>

                <div style={{flex:1}}>
                    <EventTable />
                </div>

            </div>


        
        </>
    )
}