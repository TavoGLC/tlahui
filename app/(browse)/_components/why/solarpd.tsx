import { Card, ScatterChart, Text, Title } from "@tremor/react";

const data = require('./data/solar_pandemics.json')

export const SolarPandemics = () => (
    <Card>
        <Title>Solar activity and pandemics</Title>
        <Text>Multiple Data Sources </Text>
        <ScatterChart
        className="h-80 mt-6 -ml-2"
        colors={["indigo"]}
        data={data}
        category="Country"
        x="year"
        y="sunspots"
        size="Number of Outbreaks"
        showOpacity={true}
        minXValue={1818}
        enableLegendSlider
        />
    </Card>
);