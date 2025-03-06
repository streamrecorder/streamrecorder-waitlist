import * as React from "react";
import Image from "next/image";

const brands = [
    {
        name: "Twitch",
        logo: "https://cdn.streamrecorder.app/twitch.svg?"
    },
    {
        name: "SOOP",
        logo: "https://cdn.streamrecorder.app/soop.svg"
    },
    {
        name: "Chzzk",
        logo: "https://cdn.streamrecorder.app/chzzk.svg"
    },
    {
        name: "Telegram",
        logo: "https://cdn.streamrecorder.app/telegram.svg"
    },
    {
        name: "Discord",
        logo: "https://cdn.streamrecorder.app/discord.svg"
    },
    {
        name: "Gofile",
        logo: "https://cdn.streamrecorder.app/gofile.png"
    }
];

export default function Integrates() {
    return (
        <div className="py-24 md:min-w-[800px]">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                <p className="max-w-sm mx-auto text-pretty text-center font-bold text-xl md:text-4xl text-white mb-6">
                    Integrated With
                </p>

                <div
                    className="max-w-xs mx-auto grid grid-cols-2 items-center md:grid-cols-3 md:max-w-lg lg:grid-cols-6 lg:max-w-3xl">
                    {brands.map((brand) => (
                        <div key={brand.name} title={brand.name} className="flex items-center justify-center p-4">
                            <div className="relative h-[56px] w-full">
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}