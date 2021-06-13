import React from "react";
import Image from "next/image";

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
];

const Services = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 pt-16 pb-12 px-5">
                <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 flex flex-col items-center">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-center text-black uppercase">
                        Welcome To{" "}
                        <span className="text-my-theme">
                            Realistic Cleaning
                        </span>
                    </h2>
                    <p className="mt-6 font-base text-lg md:text-xl text-center text-black max-w-2xl md:max-w-3xl">
                        We provide professional and quality cleaning services.
                        Our technicians are equipped with the most advance
                        machinery to provide carpet and upholstery steam
                        cleaning. We use eco-friendly, green-certified cleaning
                        products.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 mb-10">
                <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col md:flex-row justify-center items-center md:items-start">
                    {services.map((v, i) => (
                        <div
                            key={i}
                            className="flex flex-1 items-center justify-center flex-col px-5 mb-10"
                        >
                            <Image width={60} height={60} src={v.image} />
                            <p className="text-center text-lg font-semibold my-3">
                                {v.name}
                            </p>
                            <p className="text-center max-w-lg">{v.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
