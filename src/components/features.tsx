import {cn} from "@/lib/utils";
import {Accessibility, Brain, Cloud, DollarSign, FileLock2, HelpCircle, ShoppingCart, UserRoundPlus} from "lucide-react";

const features = [
    {
        title: "Ease of use",
        description: "StreamRecorder is so simple you already know how to use it.",
        icon: <Accessibility/>
    },
    {
        title: "Pricing like no other",
        description: "StreamRecorder charges only for what you use. Costs are billed based on downloads and playback time.",
        icon: <DollarSign/>
    },
    {
        title: "100% Uptime guarantee",
        description: "StreamRecorder never goes down.",
        icon: <Cloud/>
    },
    {
        title: "Affiliate program",
        description: "Earn 30% of every sale you refer to StreamRecorder",
        icon: <UserRoundPlus/>
    },
    {
        title: "Sell your video",
        description: "StreamRecorder purchases highlights video, fanroom video, and more.",
        icon: <ShoppingCart/>
    },
    {
        title: "Sell your credentials",
        description: "StreamRecorder allows you to sell your stream access credentials, record them. We'll buy the credentials from you, and you’ll earn revenue based on the rarity and demand of the content.",
        icon: <FileLock2/>
    },
    {
        title: "AI-Powered search",
        description: "Find videos using screenshots or by entering text descriptions with our advanced AI technology.",
        icon: <Brain/>
    },
    {
        title: "Customer Support",
        description: "StreamRecorder is always ready to help you.",
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
