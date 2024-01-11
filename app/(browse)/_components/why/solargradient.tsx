import { Card, LineChart, Title } from "@tremor/react";

const data = require('./data/solar_gradient.json')

export const SolarGradient = () => (
    <Card>
        <Title>Number of Outbreaks vs Solar activity gradient</Title>
            <LineChart
                className="mt-6"
                data={data}
                index="Sunspots gradient"
                categories={["Number of Outbreaks"]}
                colors={["indigo"]}
                yAxisWidth={40}
                />
    </Card>
);
