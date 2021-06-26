import Head from "next/head";
import {
    FAQ,
    Banner,
    Footer,
    Navbar,
    Services,
    ContactUS,
    Testimonials,
    WhatsImportant,
    ServicesWeOffer,
    ServicesIncludes,
} from "../components";
const Home = () => {
    `
    
    
    `;

    return (
        <>
            <Head>
                <title>Realistic Cleaning</title>
                <link rel="icon" href="/favicon.ico" />
                <script>
                    {(() => {
                        !(function (f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function () {
                                n.callMethod
                                    ? n.callMethod.apply(n, arguments)
                                    : n.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = "2.0";
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s);
                        })(
                            window,
                            document,
                            "script",
                            "https://connect.facebook.net/en_US/fbevents.js"
                        );
                        fbq("init", "339113737618805");
                        fbq("track", "PageView");
                    })()}
                </script>
                <noscript>
                    <img
                        width="1"
                        height="1"
                        style="display:none"
                        src="https://www.facebook.com/tr?id=339113737618805&ev=PageView&noscript=1"
                    />
                </noscript>
            </Head>
            <Navbar />
            <Banner />
            <Services />
            <ServicesWeOffer />
            <ServicesIncludes />
            <WhatsImportant
                bgImage="url('/images/bg-4.webp')"
                title="WHAT IS THE IMPORTANCE OF CARPET CLEANING?"
                text="Carpets are a valuable asset and a more valuable
                        investment. How can you keep them clean and utterly
                        healthy so that your loved ones could play safely on
                        them? Some might suggest homely methods and it has been
                        found that professional carpet cleaning is required to
                        keep bacteria, germs, and pollutants at an arm’s length
                        from your property."
            />
            <Testimonials />
            <WhatsImportant
                bgImage="url('/images/bg-3.webp')"
                title="ABOUT US"
                text="Realistic Cleaning is a trusted and recommended cleaning company. Book online today or call our team. We have professionally trained and certified technicians going the extra mile each day to keep our prices are reasonable and quality is high."
            />
            <FAQ />
            <ContactUS />
            <Footer />
        </>
    );
};

export default Home;
