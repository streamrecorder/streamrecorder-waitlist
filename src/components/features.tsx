import {cn} from "@/lib/utils";
import {Accessibility, Brain, DollarSign, FileLock2, HelpCircle, Link2, Server, ShieldAlert} from "lucide-react";

const features = [
    {
        title: "Ease of use",
        description: "StreamRecorder is designed to be so intuitive that you'll know exactly how to use it from the moment you start.",
        icon: <Accessibility/>
    },
    {
        title: "Pricing like no other",
        description: "StreamRecorder allows you to enjoy all services without additional costs, including unlimited downloads, streaming, and playback.",
        icon: <DollarSign/>
    },
    {
        title: "Affiliate program",
        description: "Earn a 30% commission on every sale you refer to StreamRecorder, making it easy to monetize your referrals.",
        icon: <Link2/>
    },
    {
        title: "Private storage",
        description: "Easily import videos into your private storage, ensuring they are securely saved and preserved for as long as you need.",
        icon: <Server/>
    },
    {
        title: "AI-Powered search",
        description: "Find the videos you’re looking for using screenshots or text descriptions with our powerful AI technology",
        icon: <Brain/>
    },
    {
        title: "Sell your video, credentials",
        description: "StreamRecorder buys your stream access credentials, allowing you to earn revenue based on the exclusivity and demand of your content.",
        icon: <FileLock2/>
    },
    {
        title: "Privacy by default",
        description: "We keep your personal information private and secure. We never sell or rent your personal information. — your privacy is our priority.",
        icon: <ShieldAlert/>
    },
    {
        title: "Customer support",
        description: "Our support team is always here to assist you whenever you need help.",
        icon: <HelpCircle/>
    }
];

export default function Features() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index}/>
            ))}
        </div>
    );
}

const Feature = ({
                     title,
                     description,
                     icon,
                     index
                 }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"/>
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
