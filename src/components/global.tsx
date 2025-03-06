import WorldMap from "@/components/world-map";

export default function Global() {
    return (
        <div className="py-40 bg-black w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl text-white">
                    Global Network
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Providing fast speeds anywhere in the world with our server based in Singapore
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: {lat: 64.2008, lng: -149.4937},
                        end: {lat: 34.0522, lng: -118.2437}
                    },
                    {
                        start: {lat: 64.2008, lng: -149.4937},
                        end: {lat: -15.7975, lng: -47.8919}
                    },
                    {
                        start: {lat: -15.7975, lng: -47.8919},
                        end: {lat: 38.7223, lng: -9.1393}
                    },
                    {
                        start: {lat: 51.5074, lng: -0.1278},
                        end: {lat: 28.6139, lng: 77.209}
                    },
                    {
                        start: {lat: 28.6139, lng: 77.209},
                        end: {lat: 43.1332, lng: 131.9113}
                    },
                    {
                        start: {lat: 28.6139, lng: 77.209},
                        end: {lat: -1.2921, lng: 36.8219}
                    }
                ]}
            />
        </div>
    );
}