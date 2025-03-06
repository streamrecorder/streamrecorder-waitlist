"use client";

import Hero from "@/components/hero";
import Global from "@/components/global";
import Integrates from "@/components/integrates";
import Features from "@/components/features";
import {PricingTable} from "@/components/pricing-table";

const features = [
    {name: "Platform Access", included: "free"},

    {name: "Observe Streamers", included: "free"},

    {name: "Store Your Video Permanently ($0.2 per video)", included: "starter"},

    {name: "Unlimited Dance Cut Downloads", included: "starter"},
    {name: "Unlimited Dance Cut Streaming", included: "starter"},

    {name: "5 Video Downloads", included: "free", excluded: "starter"},
    {name: "Unlimited Video Downloads", included: "starter"},

    {name: "Unlimited Exclusive Video Downloads", included: "pro"},

    {name: "10 Hours Video Streaming", included: "free", excluded: "starter"},
    {name: "Unlimited Video Streaming", included: "starter"},

    {name: "Exclusive Video [Last 30 Day]", included: "starter", excluded: "pro"},
    {name: "Exclusive Video [Last 60 Day]", included: "pro"},

    {name: "720p Videos [Last 30 Day]", included: "free", excluded: "starter"},
    {name: "720p Videos [Last 90 Day]", included: "starter", excluded: "pro"},
    {name: "720p Videos [Last 180 Day]", included: "pro"},

    {name: "4K Videos [Last 90 Day]", included: "starter", excluded: "pro"},
    {name: "4K Videos [Last 180 Day]", included: "pro"},

    {name: "Email Notification", included: "starter"},
    {name: "Telegram Notification", included: "starter"},
    {name: "Discord Notification", included: "pro"}
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
