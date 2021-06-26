import "tailwindcss/tailwind.css";
import "./styles/global.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init("339113737618805"); // facebookPixelId
                ReactPixel.pageView();

                router.events.on("routeChangeComplete", () => {
                    ReactPixel.pageView();
                });
            })
            .catch((e) => {
                console.log("got error in facebook pixel ===> ", e);
            });

        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
};

export default App;
