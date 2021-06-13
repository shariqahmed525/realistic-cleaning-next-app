import React from "react";
import Image from "next/image";

const servicesWeOffer = [
    {
        name: "Shampooing",
        text: "Shampooing method provides an effective, safe and reliable way of cleaning. It consists of a rotary floor device that is provided with tanks & brushes that helps to achieve better agitation and good cleaning result.",
        image: "/images/s-1.webp",
    },
    {
        name: "Stain Removal",
        text: "We use a specialized tool that delivers spotting, cleaning or deodorizing solution through the carpet fibres right to the backing of the carpet and underlay.",
        image: "/images/s-2.webp",
    },
    {
        name: "Deodorizer",
        text: "We’re your trusted partner to help you remove odour from your space. We pride ourselves in removing odours from smoke, urine, vomit, pets, mould damage, biological and sewage.",
        image: "/images/s-3.webp",
    },
    {
        name: "Disinfectant",
        text: "It can kill 99% bacteria, as well as a majority of moulds and viruses. Adding it to a steam cleaner will do the double-duty of also using heat to kill pathogens, leading to a well-cleaned area.",
        image: "/images/s-4.webp",
    },
];

const ServicesIncludes = () => {
    return (
        <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center text-black uppercase">
                Services Includes
            </h2>
            <div className="grid grid-cols-4 gap-4 mt-3 md:mt-7 w-full sm:w-11/12 md:w-full xl:w-11/12">
                {servicesWeOffer.map((v, i) => (
                    <div
                        key={i}
                        className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-center items-center p-5"
                    >
                        <Image width={100} height={100} src={v.image} />
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

export default ServicesIncludes;
