import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/casessdg.json')

export const CasesDLG = () => (
    <Card>
        <Title>Mean Number of COVID-19 cases by Day Duration Gradient</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="day duration (gradient 10/10)"
            categories={["cases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);
