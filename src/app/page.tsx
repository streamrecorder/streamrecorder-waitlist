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
    {name: "Unlimited Dance Cut Downloads", included: "starter"},
    {name: "Unlimited Dance Cut Streaming", included: "starter"},
    {name: "100 Video Downloads (Monthly)", included: "starter"},
    {name: "300 Video Downloads (additional $0.007 per hour)", included: "pro"},
    {name: "10 Hours Video Streaming (Monthly)", included: "free"},
    {name: "30 Hours Video Streaming (Monthly)", included: "starter"},
    {name: "100 Hours Video Streaming (additional $0.0018 per 15 minutes)", included: "pro"},
    {name: "Last 5 Day 720p Videos", included: "free"},
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
