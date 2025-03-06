"use client";

import Hero from "@/components/hero";
import Global from "@/components/global";
import Integrates from "@/components/integrates";
import Features from "@/components/features";
import {PricingTable} from "@/components/pricing-table";

const features = [
    {name: "Platform Access", included: "free"},
    {name: "HD Video", included: "free"},
    {name: "4K Video", included: "starter"},
    {name: "Observe Streamers", included: "free"},
    {name: "Keep video permanently ($0.2 per video)", included: "starter"},
    {name: "Unlimited Dance Cut Downloads", included: "starter"},
    {name: "Unlimited Dance Cut Streaming", included: "starter"},
    {name: "5 Video Downloads", included: "free", excluded: "starter"},
    {name: "Unlimited Video Downloads", included: "starter"},
    {name: "10 Hours Video Streaming", included: "free", excluded: "pro"},
    {name: "Unlimited Video Streaming", included: "starter"},
    {name: "Last 30 Day 720p Videos", included: "free", excluded: "starter"},
    {name: "Last 90 Day 720p Videos", included: "starter"},
    {name: "Last 90 Day 4K Videos", included: "starter"}
];

const plans = [
    {
        name: "Free",
        price: {monthly: 0, yearly: 0},
        level: "free"
    },
    {
        name: "Starter",
        price: {monthly: 10, yearly: 100},
        level: "starter",
        popular: true
    },
    {
        name: "Pro",
        price: {monthly: 25, yearly: 225},
        level: "pro"
    }
];

export default function Home() {
    return (
        <div className="p-4">
            <Hero/>
            <Integrates/>
            <Features/>
            <PricingTable
                features={features}
                plans={plans}
                defaultPlan="pro"
                defaultInterval="monthly"
                buttonClassName="hidden"
            />
            <Global/>
        </div>
    );
}
