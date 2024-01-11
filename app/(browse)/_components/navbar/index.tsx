import Link from "next/link";
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <nav className = "fixed top-0 w-full h-20 z-[49] bg-[#eeeeee] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <div className="space-x-20 space-y-10">
                <Link href="https://www.buymeacoffee.com/tavoglc"  target="_blank" rel="noopener noreferrer">
                    <Button title=":3">
                        Donate
                    </Button>
                </Link>
            </div>
        </nav>
    );
};