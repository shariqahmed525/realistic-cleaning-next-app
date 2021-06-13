import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const reviews = [
    {
        name: "Kristina Lewis",
        text: "Fantastic service! I will definitely be a repeat customer! Highly recommended! The carpets where pretty soiled from a puppy! He cleaned them and deodorized them. Very reasonably priced.",
        image: "/images/t-6.webp",
    },
    {
        name: "Sandra Davidson",
        text: "They were great with communication, on-time, polite, and made our old living room set look like brand new. I have been using their services for a long time and every time I noticed that they prefer the job not the money. I'll definitely hire them again",
        image: "/images/t-7.webp",
    },
    {
        name: "Mariana Salas",
        text: "Highly recommended my carpet was incredibly dirty and they left it almost as new I am so happy with the service. They arrived on time and it was excelente service.",
        image: "/images/t-1.webp",
    },
    {
        name: "Roger Nkosi Dawson",
        text: "A+. Great communication for booking an appointment. Cleaner was very nice quick and through when he arrived. Definitely recommend!",
        image: "/images/t-4.webp",
    },
    {
        name: "Jenn Williams",
        text: "Just had these guys clean my sofa bed... 10 years of dirt, glue, pen marks, dog hair and smell... and it’s like new. Came out same day and very reasonably priced . Highly recommend ",
        image: "/images/t-3.webp",
    },
    {
        name: "Diane Frances",
        text: "This service is very professional. The carpets we very stained and they now look wonderful.. I will use and recommend this service. They were friendly and very organized. They kept me informed on their arrival time.",
        image: "/images/t-2.webp",
    },
    {
        name: "Laurie Knight (Brinson)",
        text: "Absolutely astounded that they were able to remove pet stains from my carpet, very friendly staff and affordable pricing. I would definitely not hesitate to call again",
        image: "/images/t-5.webp",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center text-black uppercase">
                TESTIMONIALS
            </h2>
            <div className="w-full sm:w-11/12 md:w-full xl:w-10/12">
                <div className="relative">
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className="mx-auto"
                        containerClass="container"
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="py-10"
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 1,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 1,
                            },
                        }}
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {reviews.map((v, i) => (
                            <div
                                key={i}
                                className="flex flex-1 flex-col justify-center items-center"
                            >
                                <div className="px-5 py-2 w-full md:w-8/12 flex flex-col justify-center items-center">
                                    <p className="text-lg text-center mb-7 text-gray-500">
                                        {v.text}
                                    </p>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={v.image}
                                        className="rounded-full"
                                    />
                                    <p className="font-semibold text-center text-2xl mt-7">
                                        {v.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
