import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark py-7 md:py-10 px-5 flex justify-center items-center">
      <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl">
        <p className="font-normal text-base text-center text-white">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-my-theme cursor-pointer">
            Realistic Cleaning
          </span>{" "}
          | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
