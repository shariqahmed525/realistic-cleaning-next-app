import Head from "next/head";
import {
    FAQ,
    Navbar,
    Banner,
    Services,
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
            <WhatsImportant />
            <FAQ />
        </>
    );
};

export default Home;
