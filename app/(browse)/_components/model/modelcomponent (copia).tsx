
import { useState } from "react"
import { Card, LineChart, Title } from "@tremor/react";

import { CompositionModel } from "./compositionmodel";
import { FormatCopositionFeatures } from "./formatCompositionFeatures";

import { SusceptibilityModel } from "./susceptibilityModel";
import { FormatSusceptibilityFeatures } from "./formatSusceptibilityFeatures";


export const ModelComponent = () =>{
    
    const dataorg = require('./utils/spotsscaled.json')
    
    const [sliderValue_solar,setSliderValue_solar] = useState(20)
    const handleSliderValue_solar = (e: any) => setSliderValue_solar(e.target.value)

    const [sliderValue_lat,setSliderValue_lat] = useState(0)
    const handleSliderValue_lat = (e: any) => setSliderValue_lat(e.target.value)

    const [sliderValue_long,setSliderValue_long] = useState(0)
    const handleSliderValue_long = (e: any) => setSliderValue_long(e.target.value)

    const datasolar: any = []
    for (let i=0; i< dataorg.length-1; i++) {
        datasolar.push({
            'dayofyear': dataorg[i]['dayofyear'],
            'sunspots': dataorg[i]['sunspots']*sliderValue_solar
        })}

    const compdata = FormatCopositionFeatures(sliderValue_lat,sliderValue_long,datasolar)

    async function GetCompData(){
        const toReturn = await CompositionModel(compdata)
        return toReturn
    }



    const compositionforecasted = GetCompData()


    async function GetSusData(){
        const toReturn = await SusceptibilityModel(compdata)
        return toReturn
    }

    //const susceptibilityforecasted = GetSusData()


    console.log(compositionforecasted)

    return (
        <div>
            <div className="flex w-full space-x-10 p-10">
                <div>
                    <p>
                        Sunspots scale
                    </p>
                    <input type="range" min={0} max={100} value={sliderValue_solar} onChange={handleSliderValue_solar} 
                    className="transparent h-[2px] border-transparent bg-[#eeeeee]"/>
                </div>

                <div>
                    <p>
                        Latitude
                    </p>
                    <input type="range" min={-60} max={60} value={sliderValue_lat} onChange={handleSliderValue_lat}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>

                <div>
                    <p>
                        Longitude
                    </p>
                    <input type="range" min={-180} max={180} value={sliderValue_long} onChange={handleSliderValue_long}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee] "/>
                </div>
            </div>
            <div className="space-y-5 p-5">
                <div>
                    <Card>
                        <Title>Forecasted Susceptibility (Location = ({sliderValue_lat},{sliderValue_long}))</Title>
                            <LineChart
                            className="mt-6"
                            data={datasolar}
                            index="dayofyear"
                            categories={["sunspots"]}
                            colors={["indigo"]}
                            yAxisWidth={40}
                            />
                    </Card>
                </div>

                <div>
                    <Card>
                        <Title>Forecasted Viral composition (Location = ({sliderValue_lat},{sliderValue_long}))</Title>
                            <LineChart
                            className="mt-6"
                            data={compositionforecasted}
                            index="dayofyear"
                            categories={["[A]"]}
                            colors={["indigo"]}
                            yAxisWidth={40}
                            />
                    </Card>
                </div>

                <div>
                    <Card>
                        <Title>Daily Aunspots Average (Max Scale = {sliderValue_solar})</Title>
                            <LineChart
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
