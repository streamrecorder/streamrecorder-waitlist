"use client";

import Hero from "@/components/hero";
import Integrates from "@/components/integrates";
import Features from "@/components/features";
import {PricingTable} from "@/components/pricing-table";

const features = [
    {name: "Private Storage ($0.1 per video)", included: "starter"},

    {name: "Videos (No Download, 50 Hours Streaming)", included: "free", excluded: "starter"},
    {name: "Videos (Unlimited Download, Streaming)", included: "starter"},

    {name: "Dance Cuts (Unlimited Streaming)", included: "starter", excluded: "pro"},
    {name: "Dance Cuts (Unlimited Download, Streaming)", included: "pro"},

    {name: "720p Videos (Last 30 Day)", included: "free", excluded: "starter"},
    {name: "1080p Videos (Last 14 Day)", included: "free", excluded: "starter"},
    {name: "1080p Videos (Last 50 Day)", included: "starter", excluded: "pro"},
    {name: "1080p Videos (Last 100 Day, Chat Replay Included)", included: "pro"},

    {name: "AI-Powered Screenshot Search (150 Requests)", included: "starter", excluded: "pro"},
    {name: "AI-Powered Screenshot Search (Unlimited Requests)", included: "pro"},

    {name: "AI-Powered Text Search (200 Requests)", included: "starter", excluded: "pro"},
    {name: "AI-Powered Text Search (1000 Requests)", included: "pro"},

    {name: "AI-Powered Similar Search (100 Requests)", included: "pro"},

    {name: "Email & Telegram Notifications", included: "starter"},

    {name: "Ad-Free Experience", included: "starter"},

    {name: "Stream Charts", included: "pro"}
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
        </div>
    );
}
