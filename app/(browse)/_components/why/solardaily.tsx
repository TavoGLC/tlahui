import { AreaChart, Card, Title, Text } from "@tremor/react";

const data = require('./data/dailydl.json')

export const SolarDaily = () => (
    <Card>
        <Title>Solar Intensity vs Time of the day</Title>
        <Text>Example Profile </Text>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="hour"
            categories={["Solar Flux"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);
