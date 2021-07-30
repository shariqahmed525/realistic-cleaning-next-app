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
    {
        name: "EXPEDITIOUS CLEANING",
        text: "We are equipped with state-of-the-art cleaning equipment and tools to complete each project in no time",
        image: "/images/ex-4.webp",
    },
];

const Services = () => {
    return (
        <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-center text-black uppercase">
                Welcome To{" "}
                <span className="text-my-theme">Realistic Cleaning</span>
            </h2>
            <p className="mt-6 font-base text-lg md:text-xl text-center text-black max-w-2xl md:max-w-3xl">
                We provide professional and quality cleaning services. Our
                technicians are equipped with the most advance machinery to
                provide carpet and upholstery steam cleaning. We use
                eco-friendly, green-certified cleaning products.
            </p>

            <div className="grid grid-cols-4 gap-4 mt-10 w-full sm:w-11/12 md:w-full xl:w-10/12">
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
            </div>
        </div>
    );
};

export default Services;
