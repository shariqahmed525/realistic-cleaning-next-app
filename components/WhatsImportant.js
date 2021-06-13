import React from "react";

const WhatsImportant = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/ser-1.webp')",
            }}
        >
            <div className="bg-my-theme bg-opacity-80 py-10 md:py-16 px-5 flex flex-col justify-center items-center">
                <div className="w-full sm:w-11/12 md:w-full xl:w-10/12">
                    <h2 className="font-bold text-xl sm:text-3xl xl:text-3xl text-center text-white uppercase">
                        WHAT IS THE IMPORTANCE OF CARPET CLEANING?
                    </h2>
                    <p className="text-base sm:text-lg xl:text-xl text-center text-white mt-5">
                        Carpets are a valuable asset and a more valuable
                        investment. How can you keep them clean and utterly
                        healthy so that your loved ones could play safely on
                        them? Some might suggest homely methods and it has been
                        found that professional carpet cleaning is required to
                        keep bacteria, germs, and pollutants at an arm’s length
                        from your property.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatsImportant;
