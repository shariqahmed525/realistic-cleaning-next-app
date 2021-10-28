import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const reviews = [
  {
    name: "Michael Henderson",
    text: "These guys were efficient, quick and didn't leave a single mess behind. Not only did they clean the vents and ducts but also taught me how to maintain and take proper care of the furnace. From now on i will only call you guys.",
    image: "/images/duct-test-1.jpeg",
  },
  {
    name: "Roger Nkosi Dawson",
    text: "A+. Great communication for booking an appointment. Cleaner was very nice quick and through when he arrived. Definitely recommend!",
    image: "/images/t-4.webp",
  },
  {
    name: "De-Ann Scheelar",
    text: "We had a great experience with this service! The 2 man team was highly professional. They worked quickly and efficiently. They even took the time to explain the process. I will definitely be recommending the company (I actually already have!)",
    image: "/images/duct-test-3.jpeg",
  },
  {
    name: "Laura Hoskyn Eeg",
    text: "We hired this company through Roy. And they came here on time and did an awesome job. And Sam was very professional and friendly he also explained me what he was doing step by step. Highly recommended this company!",
    image: "/images/duct-test-4.jpeg",
  },
];

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
        <h2 className="sec-title font-sans font-semibold text-2xl xs:text-3xl text-center text-black uppercase relative">
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
                      placeholder="blur"
                      blurDataURL={v.image}
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
    </Element>
  );
};

export default Testimonials;
