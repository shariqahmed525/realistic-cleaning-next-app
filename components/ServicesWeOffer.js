import React from "react";
import Image from "next/image";

const servicesWeOffer = [
    {
        name: "Carpet Cleaning",
        image: "/images/ser-1.webp",
        text: "Carpets are a complicated surface that are made from many different types of materials and various fibres that require specialist cleaning techniques.",
    },
    {
        name: "Upholstery Cleaning",
        image: "/images/ser-2.webp",
        text: "Upholstery can be manufactured using many types of fabrics stitching and padding that require specialist cleaning techniques.",
    },
    {
        name: "Rug Cleaning",
        image: "/images/ser-3.webp",
        text: "Rugs are manufactured using many different types of fibres from silk and wool to synthetics. They can be specially hand-woven or mass-produced.",
    },
    {
        name: "Mattress Cleaning",
        image: "/images/ser-4.webp",
        text: "Our mattress cleaning process involves a high-frequency vibrating system that loosens dirt and dust attached to your mattress.",
    },
];

const ServicesWeOffer = () => {
    return (
        <div className="bg-my-gray py-10 md:py-16 px-5 flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center text-black uppercase">
                Services We Offer
            </h2>
            <p className="mt-2 font-medium text-lg xl:text-xl text-center text-gray-700">
                Commercial and Residential Cleaning Services
            </p>
            <div className="grid grid-cols-4 gap-4 mt-5 md:mt-10 w-full sm:w-11/12 md:w-full xl:w-10/12">
                {servicesWeOffer.map((v, i) => (
                    <div
                        key={i}
                        className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-center items-center p-5"
                    >
                        <Image
                            width={200}
                            height={200}
                            src={v.image}
                            className="rounded-full"
                        />
                        <p className="text-center mt-5 font-bold text-xl md:text-2xl">
                            {v.name}
                        </p>
                        <p className="text-center mt-4">{v.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesWeOffer;
