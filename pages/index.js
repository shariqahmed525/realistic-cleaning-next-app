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
