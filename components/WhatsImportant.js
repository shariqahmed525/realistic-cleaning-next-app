import React from "react";

const WhatsImportant = ({ bgImage, title, text }) => {
    return (
        <div
            style={{
                backgroundImage: bgImage,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-my-theme bg-opacity-80 py-10 md:py-16 px-5 flex flex-col justify-center items-center">
                <div className="w-full sm:w-11/12 md:w-full xl:w-10/12">
                    <h2 className="font-bold text-xl sm:text-3xl xl:text-3xl text-center text-white uppercase">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg xl:text-xl text-center text-white mt-5">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatsImportant;
