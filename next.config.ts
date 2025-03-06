import {withPlausibleProxy} from "next-plausible";

module.exports = withPlausibleProxy()({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.streamrecorder.app",
                port: "",
                pathname: "/**",
                search: ""
            }
        ]
    }
});