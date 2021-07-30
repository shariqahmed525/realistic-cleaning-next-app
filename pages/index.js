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
            <div className="mb-20">
                <WhatsImportant
                    bgImage="url('/images/bg-4.webp')"
                    title="Our Partners / Our Clients"
                    showPartners
                    bgColor="bg-logo-theme-secondary"
                />
            </div>
            <ContactUS />
            <Footer />
        </>
    );
};

export default Home;
