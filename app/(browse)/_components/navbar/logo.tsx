import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className = "hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
                <div className = "bg-[#eeeeee] rounded-full p-1">
                    <Image 
                    src = "/logo.svg"
                    alt = "Tlahuizcalpantecutli"
                    height = "32"
                    width = "32"
                    />
                </div>
                <div className = {cn(
                    font.className
                    )}>
                    <p className = "text-xl font-semibold">
                        Tlahuizcalpantecuhtli
                    </p>
                    <p className = "text-xs text-muted-foreground">
                        SARS-Cov-2 Forecasting
                    </p>
                </div>
            </div>
            </Link>
    );
};