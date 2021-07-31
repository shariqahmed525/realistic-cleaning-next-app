import Head from "next/head";
import dynamic from "next/dynamic";

const FAQDynamic = dynamic(() => import("../components/FAQ"), {
    ssr: false,
});

const BannerDynamic = dynamic(() => import("../components/Banner"), {
    ssr: false,
    loading: () => (
        <div className="flex flex-1 h-screen w-full justify-center items-center">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    ),
});

const FooterDynamic = dynamic(() => import("../components/Footer"), {
    ssr: false,
    loading: () => (
        <p className="flex text-center justify-center align-center"></p>
    ),
});

const NavbarDynamic = dynamic(() => import("../components/Navbar"), {
    ssr: false,
    loading: () => (
        <p className="flex text-center justify-center align-center"></p>
    ),
});

const ServicesDynamic = dynamic(() => import("../components/Services"), {
    ssr: false,
    loading: () => (
        <p className="flex text-center justify-center align-center"></p>
    ),
});

const ContactUSDynamic = dynamic(() => import("../components/ContactUS"), {
    ssr: false,
    loading: () => (
        <p className="flex text-center justify-center align-center"></p>
    ),
});

const TestimonialsDynamic = dynamic(
    () => import("../components/Testimonials"),
    {
        ssr: false,
        loading: () => (
            <p className="flex text-center justify-center align-center"></p>
        ),
    }
);

const WhatsImportantDynamic = dynamic(
    () => import("../components/WhatsImportant"),
    {
        ssr: false,
        loading: () => (
            <p className="flex text-center justify-center align-center"></p>
        ),
    }
);

const ServicesWeOfferDynamic = dynamic(
    () => import("../components/ServicesWeOffer"),
    {
        ssr: false,
        loading: () => (
            <p className="flex text-center justify-center align-center"></p>
        ),
    }
);

const ServicesIncludesDynamic = dynamic(
    () => import("../components/ServicesIncludes"),
    {
        ssr: false,
        loading: () => (
            <p className="flex text-center justify-center align-center"></p>
        ),
    }
);

const Home = () => {
    return (
        <>
            <Head>
                <title>Realistic Cleaning</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <meta
                    name="description"
                    content="Realistic Cleaning is a professional carpet cleaning company specializing in residential and commercial carpet and furniture steam cleaning services. To book your appointment contact us at 289-812-3444"
                />
                <meta name="robots" content="noindex,nofollow" />
                <meta
                    name="facebook-domain-verification"
                    content="eklfikdmlg4k82kqih16ki3fpfpipe"
                />
            </Head>
            <NavbarDynamic />
            <BannerDynamic />
            <ServicesDynamic />
            <ServicesWeOfferDynamic />
            <ServicesIncludesDynamic />
            <WhatsImportantDynamic
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
            <TestimonialsDynamic />
            <WhatsImportantDynamic
                bgImage="url('/images/bg-3.webp')"
                title="ABOUT US"
                text="Realistic Cleaning is a trusted and recommended cleaning company. Book online today or call our team. We have professionally trained and certified technicians going the extra mile each day to keep our prices are reasonable and quality is high."
            />
            <FAQDynamic />
            <div className="mb-20">
                <WhatsImportantDynamic
                    bgImage="url('/images/bg-4.webp')"
                    title="Our Partners / Our Clients"
                    showPartners
                    bgColor="bg-logo-theme-secondary"
                />
            </div>
            <ContactUSDynamic />
            <FooterDynamic />
        </>
    );
};

export default Home;
