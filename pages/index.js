import Head from "next/head";
// import Image from "next/image";
import { Navbar, Banner, Services, ServicesWeOffer } from "../components";
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
        </>
    );
};

export default Home;
