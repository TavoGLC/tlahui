import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/sfdeceases.json')

export const SolarFluxDeceases = () => (
    <Card>
        <Title>Solar Flux Gradient vs Deceases</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Solar flux gradient"
            categories={["Deceases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);