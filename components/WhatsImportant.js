import React from "react";
import Image from "next/image";

const partners = [
  {
    link: "https://staycleangta.com/",
    image: "/images/partner-1.webp",
  },
  // {
  //     link: "https://staycleangta.com/",
  //     image: "/images/partner-1.webp",
  // },
];

const WhatsImportant = ({ bgImage, title, text, showPartners, bgColor }) => {
  return (
    <div
      style={{
        ...(bgImage && {
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }),
      }}
    >
      <div
        className={`${bgImage && "bg-opacity-75"} ${
          bgColor || "bg-dark-my-theme"
        } py-10 md:py-16 px-5 flex flex-col justify-center items-center`}
      >
        <div className="w-full sm:w-11/12 md:w-full xl:w-10/12">
          <h2 className="font-bold font-sans text-xl sm:text-3xl xl:text-3xl text-center text-white uppercase">
            {title}
          </h2>
          {text && (
            <p className="text-base font-sans sm:text-lg text-center text-white mt-5">
              {text}
            </p>
          )}
          {showPartners && (
            <>
              <div className="grid grid-cols-12 mt-12">
                <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col lg:flex-row justify-center items-center lg:items-start">
                  {partners.map((v, i) => (
                    <a key={i} href={v.link}>
                      <div className="flex flex-1 items-center justify-center flex-col px-5 mb-10">
                        <Image
                          height={70}
                          width={"300"}
                          src={v.image}
                          placeholder="blur"
                          objectFit="contain"
                          blurDataURL={v.image}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsImportant;
