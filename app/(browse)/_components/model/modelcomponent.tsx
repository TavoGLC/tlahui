
import { useState, useEffect } from "react"
import { Card, AreaChart, Title } from "@tremor/react";

import { CompositionModel } from "./compositionmodel";
import { FormatCopositionFeatures } from "./formatCompositionFeatures";

import { SusceptibilityModel } from "./susceptibilityModel";
import { FormatSusceptibilityFeatures } from "./formatSusceptibilityFeatures";


export const ModelComponent = () =>{
    
    const dataorg = require('./utils/spotsscaled.json')
    
    const [inputForm,setSliderValues] = useState({
        latitude:10,
        longitude:10,
        sunspots:25,
    })

    const [compositionForecasted, setCompositionForecasted] = useState([])
    const [susceptibilityForecasted, setSusceptibilityForecasted] = useState([])

    const handleChange = (e:any) => setSliderValues({
        ...inputForm,
        [e.target.name]:e.target.value
    })

    const datasolar: any = []
    for (let i=0; i< dataorg.length-1; i++) {
        datasolar.push({
            'dayofyear': dataorg[i]['dayofyear'],
            'sunspots': dataorg[i]['sunspots']*inputForm.sunspots
        })}

    useEffect(()=>{

        const MakePredictions = async () => {
            const compositionFeats = FormatCopositionFeatures(inputForm.latitude,inputForm.longitude,datasolar)
            const compositionForecasted = await CompositionModel(compositionFeats)
            const susceptibilityFeats = FormatSusceptibilityFeatures(inputForm.latitude,inputForm.longitude,datasolar,compositionForecasted)
            const susceptibilityForecasted = await SusceptibilityModel(susceptibilityFeats)
            setCompositionForecasted(compositionForecasted)
            setSusceptibilityForecasted(susceptibilityForecasted)
            
        }
        MakePredictions()
    },[inputForm])

    return (
        <div>
            <div className="flex w-full space-x-10 p-10">
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
            </div>
            <div className="space-y-5 p-5">
                <div>
                    <Card>
                        <Title>Forecasted Susceptibility (Location = ({inputForm.latitude},{inputForm.longitude}))</Title>
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

                <div>
                    <Card>
                        <Title>Forecasted Viral composition (Location = ({inputForm.latitude},{inputForm.longitude}))</Title>
                            <AreaChart
                            className="mt-6"
                            data={compositionForecasted}
                            index="dayofyear"
                            categories={['A','C','G','T']}
                            colors={["indigo",'cyan','neutral','red']}
                            yAxisWidth={40}
                            />
                    </Card>
                </div>

                <div>
                    <Card>
                        <Title>Daily Aunspots Average (Max Scale = {inputForm.sunspots})</Title>
                            <AreaChart
                            className="mt-6"
                            data={datasolar}
                            index="dayofyear"
                            categories={["sunspots"]}
                            colors={["indigo"]}
                            yAxisWidth={40}
                            />
                    </Card>
                </div>
            
            </div>
        </div>
    )
}
