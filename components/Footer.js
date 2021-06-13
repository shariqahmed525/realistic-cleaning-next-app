import React from "react";

const Footer = () => {
    return (
        <div className="bg-white py-7 md:py-10 px-5 flex justify-center items-center">
            <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl">
                <p className="font-medium text-lg xl:text-lg text-center text-black">
                    Copyright © 2021{" "}
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
