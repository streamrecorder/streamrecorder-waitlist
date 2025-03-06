import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";
import {MoveRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => ["reliable", "intelligent", "fast", "user friendly"], []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="container">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col text-[#F4F4F5]">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span>StreamRecorder is</span>
                            <span
                                className="relative flex w-full justify-center overflow-hidden text-[#F4F4F5]/95 text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{opacity: 0, y: "-100"}}
                                        transition={{type: "spring", stiffness: 50}}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            Record, save, and share streams with a tap.
                            Enjoy a seamless, effortless experience and access all our features with ease.
                            Join our waitlist now to get early access + free 14 day trial.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Link href="https://t.me/nillpoe">
                            <Button variant="outline">
                                Telegram
                            </Button>
                        </Link>
                        <Link href="https://accounts.streamrecorder.app/waitlist">
                            <Button effect="expandIcon" icon={MoveRight} iconPlacement="right">
                                Join waitlist
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}