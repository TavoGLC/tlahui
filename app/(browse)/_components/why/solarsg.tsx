import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/spotsyrly.json')

export const SolarSG = () => (
    <Card>
        <Title>Mean Number of Sunspots (25 years average)</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="year"
            categories={["sunspots"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);

