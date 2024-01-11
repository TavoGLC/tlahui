"use client";

import { toDisplay } from "@/store/to-use";

interface WrapperProps{
    children: React.ReactNode;
}

import { MainHow } from "../how"
import { MainWhy } from "../why"
import { MainModel } from "../model"

export const MainDisplay = () => {

    const {
        display,
        onModel,
        onHow,
        onWhy,
    } = toDisplay((state) => state);
    return (
        <>
            {display==="model" && (
                <div>
                    <MainModel />
                </div>
            )
            }
            {display==="why" && (
                <div>
                    <MainWhy />
                </div>
            )
            }
            {display==="how" && (
                <div>
                    <MainHow />
                </div>
            )
            }
        </>
    )
}