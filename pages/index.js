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

const GetQuoteDynamic = dynamic(() => import("../components/GetQuote"), {
  ssr: false,
  loading: () => (
    <p className="flex text-center justify-center align-center"></p>
  ),
});

const ServicesWeOfferDynamic = dynamic(
  () => import("../components/ServicesWeOffer"),
  {
    ssr: false,
    loading: () => (
      <p className="flex text-center justify-center align-center"></p>
    ),
  }
);

// const ServicesIncludesDynamic = dynamic(
//   () => import("../components/ServicesIncludes"),
//   {
//     ssr: false,
//     loading: () => (
//       <p className="flex text-center justify-center align-center"></p>
//     ),
//   }
// );

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
          content="We offer duct cleaning services that help to remove all the contaminated and polluted air from your houses. It makes indoor air quality better and fresher for a healthier life. To book your appointment contact us at (708) 316-1276"
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
      <GetQuoteDynamic />
      {/* <ServicesIncludesDynamic /> */}
      {/* <WhatsImportantDynamic
        bgImage="url('/images/bg-4.webp')"
        title="WHAT IS THE IMPORTANCE OF CARPET CLEANING?"
        text="Carpets are a valuable asset and a more valuable
                        investment. How can you keep them clean and utterly
                        healthy so that your loved ones could play safely on
                        them? Some might suggest homely methods and it has been
                        found that professional carpet cleaning is required to
                        keep bacteria, germs, and pollutants at an arm’s length
                        from your property."
      /> */}
      <TestimonialsDynamic />
      <WhatsImportantDynamic
        bgImage="url('/images/what-important-1.webp')"
        title="WHAT IS THE IMPORTANCE OF AIR DUCT CLEANING?"
        text="Air ducts and Dryer Vents require cleaning. The Environment Protection Agency (EPA) suggests the cleaning of dryer vents and ductwork on a mandatory basis which means they suggest inspecting your HVAC system and air vents to check if there are no pollutants found and they are well maintained. Pollutants may include dirt, allergens, dust, chemicals, pollens, and other things which might be stuck in the air ducts and are polluting your house, making the air contaminated for you and your family. A properly cleaned ducts and dryer vent can work more efficiently and it also lessens the utility bill."
      />
      {/* <WhatsImportantDynamic
        // bgImage="url('/images/bg-3.webp')"
        // title="ABOUT US"
        // text="Realistic Cleaning is a trusted and recommended cleaning company. Book online today or call our team. We have professionally trained and certified technicians going the extra mile each day to keep our prices are reasonable and quality is high."
        bgImage="url('/images/bg-3.webp')"
        title="ABOUT US"
        text="We are licensed, certified, and insured. Our main priority is your
          health and satisfaction. Apart from our techniques and standards, we
          have a team of well-trained technicians who are familiar with
          different solutions which may cause any problem while trying to
          enhance the overall quality of indoor air. Our team works according to
          modern industrial standards being as safe and efficient as possible
          and we also use the best available equipment for the best possible
          outcome."
      /> */}
      <FAQDynamic />
      {/* <div className="mb-20">
        <WhatsImportantDynamic
          bgImage="url('/images/bg-4.webp')"
          title="Our Partners / Our Clients"
          showPartners
          bgColor="bg-secondary-my-theme"
        />
      </div> */}
      <ContactUSDynamic />
      <FooterDynamic />
    </>
  );
};

export default Home;
