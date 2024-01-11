import { Card, LineChart, Title } from "@tremor/react";

const data = require('./data/solar_gradient.json')

export const SolarGradientDT = () => (
    <Card>
        <Title>Mid Death Toll vs Solar activity gradient</Title>
            <LineChart
                className="mt-6"
                data={data}
                index="Sunspots gradient"
                categories={["Mid Death Toll"]}
                colors={["indigo"]}
                yAxisWidth={40}
                />
    </Card>
);
