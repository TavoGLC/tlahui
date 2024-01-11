import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/spotsdeceases.json')

export const SpotsDeceases = () => (
    <Card>
        <Title>Solar Gradient vs Deceases</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Sunspots gradient"
            categories={["Deceases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);