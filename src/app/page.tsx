"use client";

import Hero from "@/components/hero";
import Global from "@/components/global";
import Integrates from "@/components/integrates";
import Features from "@/components/features";

export default function Home() {
    return (
        <div className="block">
            <Hero/>
            <Integrates/>
            <Features/>
            <Global/>
        </div>
    );
}
