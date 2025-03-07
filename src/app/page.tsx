"use client";

import Hero from "@/components/hero";
import Integrates from "@/components/integrates";
import Features from "@/components/features";
import {PricingTable} from "@/components/pricing-table";

const features = [
    {name: "Private Storage ($0.1 per video)", included: "free"},

    {name: "Video (No Download, 50 Hours Streaming)", included: "free", excluded: "starter"},
    {name: "Video (Unlimited Download, Streaming)", included: "starter"},

    {name: "Dance Cut (Unlimited Download, Streaming)", included: "starter"},

    {name: "720p Videos (Last 30 Day)", included: "free", excluded: "starter"},
    {name: "1080p Videos (Last 5 Day)", included: "free", excluded: "starter"},
    {name: "1080p Videos (Last 30 Day)", included: "starter", excluded: "pro"},
    {name: "1080p Videos (Last 60 Day)", included: "pro"},

    {name: "AI-Powered Search (100 Request)", included: "starter", excluded: "pro"},
    {name: "AI-Powered Search (250 Request)", included: "pro"},

    {name: "Stream Charts (Last 50 Day)", included: "starter", excluded: "pro"},
    {name: "Stream Charts (Unlimited)", included: "pro"},

    {name: "Email & Telegram Notifications", included: "starter"},
    {name: "Ad-Free Experience", included: "starter"}
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
