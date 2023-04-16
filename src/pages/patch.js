import React, { useState, useEffect } from "react";
import styles from "./../styles/Patch.module.css"

import Head from "next/head";
import Navigation from "@/components/Navigation/Navigation";
import CommandInput from "@/components/Old/CommandInput/CommandInput";
import PatchPanel from "@/components/Old/PatchPanel/PatchPanel";
import Flow from "@/components/Old/Flow/Flow";



export default function Patch() {

    const [channelPool, setChannelPool] = useState([]);
    const [fixturePool, setFixturePool] = useState([]);



    const UpdateChannelPool = async (updatedChannels) => {
        let res = await fetch("http://127.0.0.1:3000/api/pools/channels", {
            method: "POST",
            body: JSON.stringify({"channelPool" : updatedChannels})
        })

        if (res.ok) {
            setChannelPool(updatedChannels)
        }
    }

    const GetChannelPool = async (e) => {
		let res = await fetch("http://127.0.0.1:3000/api/pools/channels");
		if (res.ok) {
			let body = await res.json()
            setChannelPool(body.channels)
		}
	};
    const GetFixturePool = async (e) => {
        let res = await fetch("http://127.0.0.1:3000/api/pools/fixtures")
        if(res.ok) {
            let body = await res.json()
            setFixturePool(body.fixturePool)
        }
    }

    useEffect(function(){
        GetChannelPool()
        GetFixturePool()
    },[])

    return (
        <>
        
            <Head>
                <title>Tension Glass: Patch</title>
            </Head>

            <Navigation />

            <div className={styles.window}>

                <div className={styles.left}>
                    <Flow channels={channelPool} UpdateChannelPool={UpdateChannelPool} />
                </div>

                <div className={styles.right}>
                    <PatchPanel 
                        channels={channelPool} 
                        UpdateChannelPool={UpdateChannelPool}
                        fixturePool={fixturePool} 
                    />
                    <CommandInput />
                </div>
            </div>
        </>
    )
}