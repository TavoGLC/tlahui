import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/spsdeceases.json')

export const PSDeceases = () => (
    <Card>
        <Title>Solar Wind (proton speed) gradient vs Deceases</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Solar Wind (proton speed) gradient"
            categories={["Deceases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);