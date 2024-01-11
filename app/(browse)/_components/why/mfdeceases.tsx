import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/mgfdeceases.json')

export const MFDeceases = () => (
    <Card>
        <Title>Solar wind (magnetic field) gradient vs Deceases</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Solar Wind (magnetic field) gradient"
            categories={["Deceases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);