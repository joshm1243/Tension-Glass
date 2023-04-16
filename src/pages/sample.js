import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import RoutingContainer from "@/components/Sample/RouteContainer/RouteContainer";
import SampleNavigation from "@/components/Sample/SampleNavigation/SampleNavigation";
import NewRouteContainer from "@/components/Sample/NewRouteContainer/NewRouteContainer";
import SampleSelect from "@/components/Sample/SampleSelect/SampleSelect";
import SampleContainer from "@/components/Sample/SampleContainer/SampleContainer";
import NetworkStatus from "@/components/Sample/NetworkStatus/NetworkStatus";

export default function Sample() {

    const [displaySample, setDisplaySample] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState({});
    const [routes, setRoutes] = useState([]);
    const [selectedSample, setSelectedSample] = useState({});
    const [selectedSamples, setSelectedSamples] = useState([]);
    const [samples, setSamples] = useState([]);
    const [sampleIndex, setSampleIndex] = useState(1);

    function SelectRoute(route) {

        const routeSamples = samples.filter(sample => sample.route_id === route.route_id);

        setSelectedRoute(route);
        setSelectedSamples(routeSamples); // The batch of samples
        setDisplaySample(true);

        if (routeSamples.length > 0) {
            setSelectedSample(routeSamples[0]); // The specific sample
        }
        else {
            setSelectedSample({});
        }

        setSampleIndex(1);

    }

    async function Learn() {

        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/samples/render", {
                method: "POST",
                body: JSON.stringify({
                    "samples" : samples,
                })
            })

        }
        catch(error) {
            console.log("Error.")
        }

    }

    function NextSample() {

        if (sampleIndex < selectedSamples.length) {

            var nextSampleIndex = sampleIndex + 1;

            setSampleIndex(nextSampleIndex);
            setSelectedSample(selectedSamples[nextSampleIndex - 1])
        }
    }

    function PreviousSample() {

        if (sampleIndex > 1) {
            
            var nextSampleIndex = sampleIndex - 1;

            setSampleIndex(nextSampleIndex);
            setSelectedSample(selectedSamples[nextSampleIndex - 1])
        }
    }

    async function DeleteSample(sampleId) {

        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/samples", {
                method: "DELETE",
                body: JSON.stringify({
                    "sample_id" : sampleId
                })
            })

            var updatedSamples = samples.filter(function(sample) {
                return sample.sample_id !== sampleId;
            });

            setSamples(updatedSamples);

            var updatedSelectedSamples = selectedSamples.filter(function(sample) {
                return sample.sample_id !== sampleId;
            });
            
            let currentIndex = sampleIndex;

            if (currentIndex > updatedSelectedSamples.length) {
                currentIndex -= 1;
                setSampleIndex(sampleIndex - 1);
            }

            if (updatedSelectedSamples.length > 0) {                
                setSelectedSample(updatedSelectedSamples[currentIndex - 1]);
            }
            else {
                setSelectedSample({});
            }

            setSelectedSamples(updatedSelectedSamples);

        }
        catch (error) {
            console.log("Error.")
        }
    }

    async function CreateSample() {

        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/samples", {
                method: "POST",
                body: JSON.stringify({
                    "route_id" : selectedRoute.route_id,
                })
            })

            var body = await response.json();

            const updatedSamples = [...samples, {
                "route_id" : selectedRoute.route_id,
                "grid" : '[["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]]',
                "sample_id" : body.sample_id
            }]

            setSamples(updatedSamples);

            const updatedSelectedSamples = [...selectedSamples, {
                "route_id" : selectedRoute.route_id,
                "grid" : '[["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"], ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]]',
                "sample_id" : body.sample_id
            }]

            setSelectedSamples(updatedSelectedSamples);

            setSelectedSample(updatedSelectedSamples[updatedSelectedSamples.length - 1]);

            setSampleIndex(updatedSelectedSamples.length);

        }
        catch(error) {
            console.log(error)
        }

    }

    async function UpdateSample(updatedSample) {
        
        const reponse = await fetch("http://127.0.0.1:3000/api/cosmos/samples", {
            method: "PUT",
            body: JSON.stringify({
                "sample_id" : updatedSample.sample_id,
                "grid" : updatedSample.grid
            })
        })

        var updatedSamples = samples.map(sample => {
            if (sample.sample_id === updatedSample.sample_id) {
              return updatedSample
            } else {
              return sample;
            }
        });

        setSamples(updatedSamples);

        //

        var updatedSelectedSamples = selectedSamples.map(sample => {
            if (sample.sample_id === updatedSample.sample_id) {
                return updatedSample
            } else {
                return sample;
            }
        })

        setSelectedSamples(updatedSelectedSamples);

        //

        setSelectedSample(updatedSample);

        //

    }

    async function DeleteRoute(route_id) {

        setSelectedRoute({})
        setDisplaySample(false);

        try {

            const reponse = await fetch("http://127.0.0.1:3000/api/cosmos/routes", {
                method: "DELETE",
                body: JSON.stringify(route_id)
            })

            setSelectedSample({});
            setSelectedSamples([]);
            setDisplaySample(false);

            var updatedRoutes = routes.filter(function(route) {
                return route.route_id !== route_id;
            });
    
            setRoutes(updatedRoutes);

            var updatedSamples = samples.filter(function(sample) {
                return sample.route_id !== route_id
            })

            

        }
        catch(error) {
            console.log(error)
        }
    }

    async function UpdateRoute(updatedRoute) {


        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/routes", {
                method: "PUT",
                body: JSON.stringify(updatedRoute)
            });

            var updatedRoutes = routes.map(route => {
                if (route.route_id === updatedRoute.route_id) {
                  return updatedRoute
                } else {
                  return route;
                }
            });

            setRoutes(updatedRoutes);
        
        }
        catch(error) {
            console.log(error);
        }
    }

    async function GetSamples() {

        try {
            const response = await fetch("http://127.0.0.1:3000/api/cosmos/samples", {
                method: "GET"
            });

            const body = await response.json();

            setSamples(body.samples);

        }

        catch(error) {
            console.log("Error.")
        }

    }

    async function GetRoutes() {

        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/routes", {
                method: "GET"
            });

            const body = await response.json();
            setRoutes(body.routes);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetRoutes();
        GetSamples();
    },[])

    async function AddRoute() {

        try {

            const response = await fetch("http://127.0.0.1:3000/api/cosmos/routes", {
                method: "POST"
            });

            const body = await response.json();

            var updatedRoutes = [...routes];
            updatedRoutes.push({
                "route_id" : body.route_id,
                "location" : "",
                "environment" : "",
                "time_of_day" : "",
                "emotion_1" : "",
                "emotion_2" : ""
            })
    
            setRoutes(updatedRoutes);
            setSelectedRoute(updatedRoutes[updatedRoutes.length - 1]);
            
            setSelectedSamples([]); // The batch of samples
            setSelectedSample({});
            setDisplaySample(true);
    
        }
        catch(error) {
            console.log(error);
        }
    }




    return (
        <>
            <Navigation />
            <SampleNavigation />

            <div style={{display:"flex"}}>
                    
                <div style={{flex:1}}>
                    <SampleSelect 
                        displaySample={displaySample} 
                        selectedRoute={selectedRoute} 
                        selectedSamples={selectedSamples} 
                        selectedSample={selectedSample} 
                        sampleIndex={sampleIndex}
                        CreateSample={CreateSample} 
                        PreviousSample={PreviousSample}
                        NextSample={NextSample}
                        DeleteSample={DeleteSample}
                    />
                    <SampleContainer 
                        selectedSample={selectedSample}
                        displaySample={displaySample}
                        UpdateSample={UpdateSample}
                        NextSample={NextSample}
                        PreviousSample={PreviousSample}
                    />
                    
                </div>

                <div style={{flex:1}}>
                    <NetworkStatus samples={samples} Learn={Learn} />
                    <RoutingContainer routes={routes} SelectRoute={SelectRoute} AddRoute={AddRoute} RemoveRoute={DeleteRoute} />
                    <NewRouteContainer route={selectedRoute} UpdateRoute={UpdateRoute} />
                </div>

            </div>
        </>

    )
}