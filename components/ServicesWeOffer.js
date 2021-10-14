import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

// const servicesWeOffer = [
//   {
//     name: "Carpet Cleaning",
//     image: "/images/ser-1.webp",
//     text: "Carpets are a complicated surface that are made from many different types of materials and various fibres that require specialist cleaning techniques.",
//   },
//   {
//     name: "Upholstery Cleaning",
//     image: "/images/ser-2.webp",
//     text: "Upholstery can be manufactured using many types of fabrics stitching and padding that require specialist cleaning techniques.",
//   },
//   {
//     name: "Rug Cleaning",
//     image: "/images/ser-3.webp",
//     text: "Rugs are manufactured using many different types of fibres from silk and wool to synthetics. They can be specially hand-woven or mass-produced.",
//   },
//   {
//     name: "Mattress Cleaning",
//     image: "/images/ser-4.webp",
//     text: "Our mattress cleaning process involves a high-frequency vibrating system that loosens dirt and dust attached to your mattress.",
//   },
// ];
const servicesWeOffer = [
  {
    name: "Duct Cleaning",
    image: "/images/ser-1.webp",
    text: "The air ducts in your home provide a very important function. They circulate the air from your heating and cooling system into and out of each room, which allows for consistent interior comfort regardless of the season.",
  },
  {
    name: "Dryer Vent Cleaning",
    image: "/images/ser-2.webp",
    text: "A clogged dryer vent forces the dryer to work hard and also shortens its life span, which can cost you a lot of money. A properly cleaned dryer vent can work more efficiently and it also lessens the utility bill.",
  },
  {
    name: "Sanitization",
    image: "/images/ser-3.webp",
    text: "Sanitization prevent the spread of germs and spores through the air. Mold is the primary concern with ducts, as it can easily build up in these isolated areas and can be tough to remove. After the system has been cleaned an EPA registered air duct sanitizer will be applied.",
  },
  {
    name: "Furnace Cleaning",
    image: "/images/ser-4.webp",
    text: "We recommends having your furnace cleaned within a three year period or should be serviced at least once a year, preferably, though, in both the spring and the fall.",
  },
];

const ServicesWeOffer = () => {
  return (
    <Element name="services">
      <div className="bg-my-gray py-10 md:py-16 px-5 flex flex-col justify-center items-center">
        <h2 className="sec-title font-sans font-semibold text-2xl xs:text-3xl text-center text-black uppercase relative">
          Services We Offer
        </h2>
        <p className="mt-5 font-sans font-normal text-base text-center text-dark">
          We have great experienced and friendly technicians to
        </p>
        <div className="grid grid-cols-4 gap-4 mt-5 md:mt-10 w-full sm:w-11/12 md:w-full xl:w-10/12">
          {servicesWeOffer.map((v, i) => (
            <div
              key={i}
              className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-start items-center px-2 xs:px-5 py-5"
            >
              <Image
                width={300}
                height={220}
                src={v.image}
                placeholder="blur"
                blurDataURL={v.image}
                className="rounded-xl"
              />
              <p className="item-title font-sans font-semibold mt-5 text-center text-black uppercase relative text-base xs:text-lg sm:text-xl">
                {v.name}
              </p>
              <p className="text-center mt-5 text-sm xs:text-base">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ServicesWeOffer;
