import React from "react";
import type {Metadata} from "next";
import NextTopLoader from "nextjs-toploader";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
    title: "StreamRecorder",
    description: "Record your favorite streams.",
    openGraph: {
        title: "StreamRecorder",
        description: "Record your favorite streams.",
        url: "https://streamrecorder.app",
        siteName: "streamrecorder.app"
    },
    twitter: {
        title: "StreamRecorder",
        card: "summary"
    },
    icons: "https://cdn.streamrecorder.app/streamrecorder.png"
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PlausibleProvider domain="streamrecorder.app">
            <html lang="en" className="[color-scheme:dark] scroll-smooth">
            <body className="min-h-screen overflow-x-hidden antialiased bg-black text-pretty">
            <ClerkProvider>
                <NextTopLoader color="#5865F2" showSpinner={false}/>
                <div className="dark min-h-screen flex flex-col">
                    {children}
                    <Analytics/>
                    <SpeedInsights/>
                    {process.env.NODE_ENV !== "production" && (
                        <div
                            className="fixed bottom-0 right-0 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-black bg-white rounded-lg pointer-events-none ">
                            <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">al</div>
                            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
                            <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
                            <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</div>
                            <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
                            <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
                        </div>
                    )}
                </div>
            </ClerkProvider>
            </body>
            </html>
        </PlausibleProvider>
    );
}
