import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/dldeceases.json')

export const DayDurationDeceases = () => (
    <Card>
        <Title>Day Duration Gradient vs Deceases</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="Day duration gradient"
            categories={["Deceases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);