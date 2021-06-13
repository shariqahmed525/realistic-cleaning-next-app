import React from "react";
// import ReactTooltip from "react-tooltip";

const Banner = () => {
    const onSubmit = (e) => {
        e && e.preventDefault();
    };
    return (
        <div
            style={{
                paddingTop: 120,
                backgroundImage: "url('/images/bg.webp')",
            }}
            className="flex flex-1 flex-col md:flex-row items-center justify-center md:justify-evenly min-h-screen bg-no-repeat bg-cover bg-opacity-50 px-5 pb-5"
        >
            <div className="flex flex-0 md:flex-1 max-w-3xl items-center md:items-start flex-col mr-0 sm:mr-7">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-white">
                    Realistic Cleaning
                </h2>
                <p className="mt-5 text-lg xl:text-xl text-center md:text-left text-white">
                    Realistic Cleaning is a professional carpet cleaning company
                    specializing in residential and commercial carpet and
                    furniture steam cleaning services. We are experts in carpet
                    cleaning, furniture cleaning and area rug cleaning with over
                    10 years of experience.We are open for business as usual
                    adhering to social distancing measure.
                </p>
                <p className="mt-5 text-lg xl:text-xl text-center md:text-left text-white">
                    PLEASE CALL{" "}
                    <a className="font-bold text-2xl" href="tel:289-812-3444">
                        289-812-3444
                    </a>
                </p>
                <div className="py-3 w-40 bg-my-theme flex justify-center items-center cursor-pointer my-7">
                    <p className="text-white uppercase text-center font-semibold">
                        Contact US
                    </p>
                </div>
            </div>
            <div className="flex flex-0 md:flex-1 w-full md:w-auto max-w-2xl flex-col bg-white border border-white p-5 md:p-7 xl:p-10 mt-3">
                <p className="font-bold text-xl md:text-2xl xl:text-4xl text-my-theme">
                    Get A Free Quote
                </p>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col justify-center mt-4 md:mt-5 xl:mt-6"
                >
                    <div className="flex flex-1 flex-col mb-4">
                        <label
                            htmlFor="name"
                            className="mb-2 text-gray-500 font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="border-2 border-gray-200 px-3 sm:px-5 py-2 sm:py-3"
                        />
                    </div>
                    <div className="flex flex-1 flex-col mb-4">
                        <label
                            htmlFor="name"
                            className="mb-2 text-gray-500 font-medium"
                        >
                            Contact Info
                        </label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="647-789-3000"
                            className="border-2 border-gray-200 px-3 sm:px-5 py-2 sm:py-3"
                        />
                    </div>
                    <div className="flex flex-1 flex-col mb-4">
                        <label
                            htmlFor="city"
                            className="mb-2 text-gray-500 font-medium"
                        >
                            City/Town Name
                        </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="Toronto, ON"
                            className="border-2 border-gray-200 px-3 sm:px-5 py-2 sm:py-3"
                        />
                    </div>
                    <div className="flex flex-1 flex-col mb-4">
                        <label
                            htmlFor="clean"
                            className="mb-2 text-gray-500 font-medium"
                        >
                            {/* <ReactTooltip
                                id="estimate"
                                type="light"
                                effect="solid"
                            >
                                <span>
                                    To generate an estimate we need to know no.
                                    of rugs, bedrooms, living rooms, steps of
                                    stairs, hallways, need measurements (for
                                    open spaces like basement), how many seating
                                    units (for couches/sofas) &amp; size of
                                    mattress (king, queen, single or double).
                                </span>
                            </ReactTooltip> */}
                            What To Clean?{" "}
                            {/* <span data-tip data-for="estimate">
                                I
                            </span> */}
                        </label>
                        <textarea
                            id="clean"
                            rows={3}
                            placeholder="What would you like to clean?"
                            className="border-2 border-gray-200 px-3 sm:px-5 py-2 sm:py-3"
                        ></textarea>
                    </div>
                    <div className="flex flex-1 flex-col mt-2">
                        <button
                            type="submit"
                            className="border-2 border-my-theme bg-my-theme cursor-pointer px-3 sm:px-5 py-2 sm:py-2.5 flex justify-center text-white items-center flex-1 text-base sm:text-lg xl:text-xl font-semibold"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;
