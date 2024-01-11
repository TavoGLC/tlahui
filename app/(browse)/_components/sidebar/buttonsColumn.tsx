"use client";

import { Button } from "@/components/ui/button"
import { toDisplay } from "@/store/to-use";

import { LineChart, Settings, HelpCircle } from "lucide-react";
export const ButtonsColumn = () => {
    const {
        display,
        onModel,
        onHow,
        onWhy,
    } = toDisplay((state) => state);
    return (
        <div className="space-y-20">
            <ul>
                <Button onClick={onModel} title="Forecasting"> 
                    <LineChart />
                </Button>
            </ul>
            <ul>
                <Button onClick={onWhy} title="Why it happens?"> 
                    <HelpCircle />
                </Button>
            </ul>
            <ul>
                <Button onClick={onHow} title="How does it works?"> 
                    <Settings />
                </Button>
            </ul>
        </div>
    );
};