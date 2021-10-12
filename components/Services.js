import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

const services = [
  {
    name: "ECO-FRIENDLY",
    text: "We use natural products that are non-toxic and green meaning safe for your family, pets, and the environment.",
    image: "/images/ex-1.webp",
  },
  {
    name: "SATISFACTION GUARANTEED",
    text: "We are Insured & Licensed. We will provide you best service. Your SATISFACTION Is Our Highest Priority.",
    image: "/images/ex-2.webp",
  },
  {
    name: "REASONABLE PRICES",
    text: "Our goodness, our reasonable prices! you will get high-quality cleaning at reasonable prices.",
    image: "/images/ex-3.webp",
  },
  {
    name: "EXPEDITIOUS CLEANING",
    text: "We are equipped with state-of-the-art cleaning equipment and tools to complete each project in no time",
    image: "/images/ex-4.webp",
  },
];

const Services = () => {
  return (
    <Element name="welcome">
      <div className="bg-white py-10 md:py-16 px-5 mb-5 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl sm:text-4xl 2xl:text-5xl text-center text-black uppercase">
          {/* Welcome To{" "}
          <span className="text-secondary-my-theme">Realistic Cleaning</span> */}
          What Is{" "}
          <span className="text-secondary-my-theme">Realistic Cleaning?</span>
        </h2>
        <p className="mt-8 font-base text-base md:text-lg text-center text-black max-w-3xl md:max-w-6xl">
          {/* We provide professional and quality cleaning services. Our technicians
          are equipped with the most advance machinery to provide carpet and
          upholstery steam cleaning. We use eco-friendly, green-certified
          cleaning products. */}
          Realistic cleaning, an air duct cleaning service that removes all the
          contaminated and polluted air from your houses and makes the indoor
          air better and fresher for a better and healthier life. We deal with
          Duct Cleaning, Dryer Vent Cleaning, HVAC cleaning, Vents, and Air
          Filter cleaning, and Renewal.
        </p>
        <div className="mt-14 w-full max-w-3xl md:max-w-6xl flex items-center justify-center">
          <img
            alt="banner"
            src="/images/air-duct-cleaning.webp"
            className="object-contain rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-0 sm:gap-4 mt-10 max-w-3xl md:max-w-7xl">
          <div className="col-span-2 sm:col-span-1 p-5 px-0">
            <p className="font-bold text-xl text-left text-black uppercase">
              What we are best known for?
            </p>
            <p className="mt-3 font-base text-sm sm:text-base text-left text-black">
              We are licensed, certified, and insured. Our main priority is your
              health and satisfaction. Apart from our techniques and standards,
              we have a team of well-trained technicians who are familiar with
              different solutions which may cause any problem while trying to
              enhance the overall quality of indoor air. Our team works
              according to modern industrial standards being as safe and
              efficient as possible and we also use the best available equipment
              for the best possible outcome.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 py-5 pl-0 pr-0 sm:pl-5 sm:border-l border-gray-200">
            <p className="font-bold text-xl text-left text-black uppercase">
              Why should we be your first consideration?
            </p>
            <p className="mt-3 font-base text-sm sm:text-base text-left text-black">
              First of all, dryer vents, air ducts, and other ductwork are
              fragile airways, which require someone professional. For good
              cleaning and to prevent damage as well, the worst-case scenario is
              when someone mistakenly releases all the previously mentioned
              pollutants into the house, if not cleaned and handled properly.
              <br />
              <br />
              Our team has years of working experience, from small houses to big
              retail stores, we have it all. We know how to deal with all types
              of ductwork with the proper tools required and also in the correct
              way. Indoors Air Quality is a matter that shouldn't be taken
              lightly.
            </p>
          </div>
        </div>
        <div
          className={`py-2.5 w-44 sm:w-52 mt-5 sm:mt-10 rounded-md bg-transparent flex justify-center items-center cursor-pointer hover:bg-dark-my-theme hover:shadow-md hover:text-white text-dark-my-theme transition-all duration-500 ease-in-out border border-dark-my-theme`}
        >
          <p className="text-sm sm:text-base uppercase text-center">
            GET QUOTE
          </p>
        </div>
        {/* <div className="grid grid-cols-4 gap-4 mt-20 w-full sm:w-11/12 md:w-full xl:w-10/12">
          {services.map((v, i) => (
            <div
              key={i}
              className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-start items-center p-5"
            >
              <Image
                width={60}
                height={60}
                src={v.image}
                placeholder="blur"
                blurDataURL={v.image}
              />
              <p className="text-center text-lg font-semibold mt-5 mb-3">
                {v.name}
              </p>
              <p className="text-center max-w-lg">{v.text}</p>
            </div>
          ))}
        </div> */}
      </div>
    </Element>
  );
};

export default Services;
