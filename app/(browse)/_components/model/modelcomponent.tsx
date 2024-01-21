import { useState, useEffect } from "react"
import { Card, AreaChart, Title } from "@tremor/react";

import { FormatFeatures } from "./makeFeaturesData";
import { ToLatentModel } from "./featuresToLatent";
import { LatentToComposition } from "./latentToComposition"
import { ToSusceptibilityModel } from "./featuresToSusceptibility";

export const ModelComponent = () =>{
    
    const dataorg = require('./utils/spotsscaled.json')

    const [inputForm,setSliderValues] = useState({
        latitude:10,
        longitude:10,
        sunspots:25,
        cloudfrac:0.1,
        ozone:250
    })

    const compositionInitial = {
        'dayofyear':1,
        'A':1,
        'C':1,
        'T':1,
        'G':1
    }

    const susceptibilityInitial = {
        'dayofyear':1,
        'susceptibility':1
    }

    const [solarData, setSolarData] = useState<any[]>(dataorg)
    const [compositionForecasted, setCompositionForecasted] = useState<any[]>([compositionInitial])
    const [susceptibilityForecasted, setSusceptibilityForecasted] = useState<any[]>([susceptibilityInitial])

    const handleChange = (e:any) => setSliderValues({
        ...inputForm,
        [e.target.name]:e.target.value
    })

    useEffect(()=>{

        const MakePredictions = async () => {

            const datasolar: any = []
            for (let i=0; i< dataorg.length-1; i++) {
                datasolar.push({
                    'dayofyear': dataorg[i]['dayofyear'],
                    'sunspots': dataorg[i]['sunspots']*inputForm.sunspots
                })}

            const Features = FormatFeatures(inputForm.latitude,inputForm.longitude,inputForm.cloudfrac,inputForm.ozone,datasolar)
            const ToLatent = await ToLatentModel(Features)
            const ToCompositionFeats = await LatentToComposition(ToLatent)
            const ToComposition = ToCompositionFeats[0]
            const compositionForecasted = ToCompositionFeats[1]

            const FinalFeatures = [...ToComposition,...Features]
            const susceptibilityForecasted = await ToSusceptibilityModel(FinalFeatures)

            //console.log(ToComposition)
            //const compositionFeats = FormatCopositionFeatures(inputForm.latitude,inputForm.longitude,datasolar)
            //const compositionForecasted = await CompositionModel(compositionFeats)
            //const susceptibilityFeats = FormatSusceptibilityFeatures(inputForm.latitude,inputForm.longitude,datasolar,compositionForecasted)
            //const susceptibilityForecasted = await SusceptibilityModel(susceptibilityFeats)

            setSolarData(datasolar)
            setCompositionForecasted(compositionForecasted)
            setSusceptibilityForecasted(susceptibilityForecasted)
            
        }
        MakePredictions()
    },[inputForm,dataorg])

    return (
        <div>
            <div className="flex w-full space-x-10 p-5 justify-evenly">
                <div>
                    <p>
                        Sunspots scale
                    </p>
                    <input name="sunspots" type="range" min={0} max={100} value={inputForm.sunspots} onChange={handleChange} 
                    className="transparent h-[2px] border-transparent bg-[#eeeeee]"/>
                </div>

                <div>
                    <p>
                        Latitude
                    </p>
                    <input name="latitude" type="range" min={-60} max={60} value={inputForm.latitude} onChange={handleChange}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>

                <div>
                    <p>
                        Longitude
                    </p>
                    <input name="longitude" type="range" min={-180} max={180} value={inputForm.longitude} onChange={handleChange}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>
                <div>
                    <p>
                        Cloudiness
                    </p>
                    <input name="cloudfrac" type="range" min={0} max={1} step={0.1} value={inputForm.cloudfrac} onChange={handleChange}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>
                <div>
                    <p>
                        Total Ozone Column
                    </p>
                    <input name="ozone" type="range" min={200} max={400} value={inputForm.ozone} onChange={handleChange}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>
            </div>

            <div className="space-y-5 p-5">
                <div className="flex justify-evenly space-x-5">
                    
                    <div className="basis-1/6 space-y-5">
                        <p className="text-xl font-bold"> Current Settings </p>
                        <p> Location </p>
                        <p> Latitude = {inputForm.latitude} </p>
                        <p> Longitude = {inputForm.longitude} </p>
                        <p> Max Sunspots = {inputForm.sunspots} </p>
                        <p> Cloudiness = {inputForm.cloudfrac} (Cloud Fraction)</p>
                        <p> Total Ozone Column = {inputForm.ozone} DU (Dobson Units) </p>
                    </div>

                    <div className="grow">
                        <Card>
                            <Title>Forecasted Susceptibility</Title>
                                <AreaChart
                                className="mt-6"
                                data={susceptibilityForecasted}
                                index="dayofyear"
                                categories={["susceptibility"]}
                                colors={["indigo"]}
                                yAxisWidth={40}
                                />
                        </Card>
                    </div>
                </div>

                <div className="flex justify-evenly space-x-5">
                    <div className="grow">
                        <Card>
                            <Title>Forecasted Viral composition</Title>
                                <AreaChart
                                data={compositionForecasted}
                                className="mt-6"
                                index="dayofyear"
                                categories={['A','C','G','T']}
                                colors={["indigo",'cyan','neutral','red']}
                                />
                        </Card>
                    </div>
                    <div className="basis-1/2">
                        <Card>
                            <Title>Daily Aunspots Average</Title>
                                <AreaChart
                                data={solarData}
                                className="mt-6"
                                index="dayofyear"
                                categories={["sunspots"]}
                                colors={["indigo"]}
                                />
                        </Card>
                </div>
            
                </div>
            </div>
        </div>
    )
}
