import { AreaChart, Card, Title } from "@tremor/react";

const data0 = require('./data/casessd.json')
const data1 = require('./data/casessdg3.json')
const data2 = require('./data/casessdg7.json')
const data3 = require('./data/casessdg.json')

export const CasesDLGF = () => (
    <div className="space-y-5">
        <div className="flex justify-evenly space-x-5">
            <div className="basis-1/2">
            <Card>
            <Title>Mean Number of COVID-19 cases by Day Duration</Title>
                <AreaChart
                className="h-72 mt-4"
                data={data0}
                index="day duration"
                categories={["cases"]}
                colors={["indigo"]}
                autoMinValue = {true}
                showGridLines = {false}
            />
            </Card>
            </div>
            <div className="grow">
            <Card>
            <Title>Mean Number of COVID-19 cases by Day Duration Fractional Gradient (3/10)</Title>
                <AreaChart
                className="h-72 mt-4"
                data={data1}
                index="day duration (gradient 3/10)"
                categories={["cases"]}
                colors={["indigo"]}
                autoMinValue = {true}
                showGridLines = {false}
            />
            </Card>
            </div>
        </div> 
        <div className="flex justify-evenly space-x-5">
        <div className="basis-1/2">
            <Card>
            <Title>Mean Number of COVID-19 cases by Day Duration Fractional Gradient (7/10)</Title>
                <AreaChart
                className="h-72 mt-4"
                data={data2}
                index="day duration (gradient 7/10)"
                categories={["cases"]}
                colors={["indigo"]}
                autoMinValue = {true}
                showGridLines = {false}
            />
            </Card>
            </div>
            <div className="grow">
            <Card>
            <Title>Mean Number of COVID-19 cases by Day Duration Gradient</Title>
                <AreaChart
                className="h-72 mt-4"
                data={data3}
                index="day duration (gradient 10/10)"
                categories={["cases"]}
                colors={["indigo"]}
                autoMinValue = {true}
                showGridLines = {false}
            />
            </Card>
            </div>
        </div>
    </div>
);