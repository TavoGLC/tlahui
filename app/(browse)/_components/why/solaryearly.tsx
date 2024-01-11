import { AreaChart, Card, Title, Text } from "@tremor/react";

const data = require('./data/yearlydl.json')

export const SolarYearly = () => (
    <Card>
        <Title>Day duration vs Day of year</Title>
        <Text>Example Profile </Text>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Day of Year"
            categories={["Day duration"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);
