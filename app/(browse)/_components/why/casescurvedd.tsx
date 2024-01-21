import { AreaChart, Card, Title } from "@tremor/react";

const data = require('./data/casessd.json')

export const CasesDL = () => (

    
    <Card>
        <Title>Mean Number of COVID-19 cases by Day Duration</Title>
            <AreaChart
            className="h-72 mt-4"
            data={data}
            index="day duration"
            categories={["cases"]}
            colors={["indigo"]}
            autoMinValue = {true}
            showGridLines = {false}
            
        />
    </Card>
);

