import {MoveRight} from "lucide-react";
import {Button} from "./ui/button";
import Link from "next/link";

export default function Waitlisted() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="container">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col text-[#F4F4F5]">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-semibold text-[#F4F4F5]/95 text-center font-regular">
                            Waitlisted!
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            Thank you for your interest.
                            We've added you to our waitlist and will notify you as soon as access becomes available.
                            We appreciate your patience.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Link href="/">
                            <Button size="lg" className="gap-4 transition-colors" variant="outline">
                                Home
                            </Button>
                        </Link>
                        <Link href="https://discord.gg/MvVrrbjcSU">
                            <Button size="lg" className="gap-4 transition-colors">
                                Join our discord <MoveRight className="w-4 h-4"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}