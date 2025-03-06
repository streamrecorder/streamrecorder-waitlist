"use client";

import Hero from "@/components/hero";
import Global from "@/components/global";
import Integrates from "@/components/integrates";
import Features from "@/components/features";
import {PricingTable} from "@/components/pricing-table";

const features = [
    {name: "Platform Access", included: "free"},
    {name: "Observe Streamers", included: "free"},

    {name: "Private Storage ($0.05 per video)", included: "free"},

    {name: "Video [15 Downloads, 30 Hours Streaming]", included: "free", excluded: "starter"},
    {name: "Video [Unlimited Download, Streaming]", included: "starter"},

    {name: "Dance Cut [Unlimited Download, Streaming]", included: "starter"},

    {name: "720p Videos [Last 30 Day]", included: "free", excluded: "starter"},
    {name: "1080p Videos [Last 30 Day]", included: "starter", excluded: "pro"},
    {name: "1080p Videos [Last 60 Day]", included: "pro"},

    {name: "100 AI-Powered Search", included: "starter", excluded: "pro"},
    {name: "250 AI-Powered Search", included: "pro"},

    {name: "Email & Telegram Notifications", included: "starter"},

    {name: "Less-Ad Experience", included: "starter", excluded: "pro"},
    {name: "Ad-Free Experience", included: "pro"}
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
