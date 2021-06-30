import React, { useEffect, useRef } from "react";
import axios from "axios";
import Loader from "./Loader";
import Image from "next/image";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import { InfoSchema, UNIVERSAL_ERROR_MSG } from "../utils/constant";

const INITIAL_VALUES = {
    name: "",
    phone: "",
    clean: "",
    location: "",
};

const Banner = () => {
    const { addToast } = useToasts();
    let tooltipMenuRef = useRef(null);

    const onSubmit = async (formData, actions) => {
        try {
            const { data } = await axios.post("/api/query", formData);
            if (data?.success && data?.message) {
                addToast(data?.message, {
                    appearance: "success",
                    autoDismiss: true,
                });
            } else {
                addToast(UNIVERSAL_ERROR_MSG, {
                    appearance: "error",
                    autoDismiss: true,
                });
            }
        } catch (error) {
            addToast(UNIVERSAL_ERROR_MSG, {
                appearance: "error",
                autoDismiss: true,
            });
            console.log(error);
        } finally {
            actions.resetForm();
        }
    };

    const onTooltipToggle = () => {
        tooltipMenuRef.current.classList.toggle("visible");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                tooltipMenuRef.current &&
                !tooltipMenuRef.current.contains(event.target)
            ) {
                tooltipMenuRef.current.classList.remove("visible");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tooltipMenuRef]);

    return (
        <div
            style={{
                backgroundImage: "url('/images/bg.webp')",
                paddingTop:
                    (typeof window !== "undefined" && window.innerWidth) > 786
                        ? 50
                        : 130,
            }}
            className="flex flex-1 flex-col md:flex-row items-center justify-center md:justify-evenly min-h-screen bg-no-repeat bg-cover bg-opacity-50 px-5 sm:px-10 pb-5"
        >
            <div className="flex flex-0 md:flex-1 max-w-3xl items-center md:items-start flex-col mr-0 md:mr-7">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-white">
                    Realistic Cleaning
                </h2>
                <p className="mt-5 text-lg xl:text-xl text-center md:text-left text-white">
                    Realistic Cleaning is a professional carpet cleaning company
                    specializing in residential and commercial carpet and
                    furniture steam cleaning services. We are experts in carpet
                    cleaning, furniture cleaning and area rug cleaning with over
                    10 years of experience. We are open for business as usual
                    adhering to social distancing measure.
                </p>
                <p className="mt-5 text-lg xl:text-xl text-center md:text-left text-white">
                    PLEASE CALL/TEXT{" "}
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
            <div className="flex flex-0 md:flex-1 w-full md:w-auto max-w-2xl flex-col bg-white border border-white p-5 md:p-7 xl:p-10 mt-3 ml-0 md:ml-7">
                <p className="font-bold text-xl md:text-2xl xl:text-4xl text-my-theme">
                    Get A Free Quote
                </p>
                <Formik
                    initialValues={INITIAL_VALUES}
                    validationSchema={InfoSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={(values, actions) => {
                        onSubmit(values, actions);
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form
                            onSubmit={handleSubmit}
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
                                    value={values.name}
                                    onChange={handleChange("name")}
                                    className={`
                                        border ${
                                            errors.name
                                                ? "border-danger"
                                                : "border-gray-300"
                                        } px-3 sm:px-5 py-2 sm:py-3
                                    `}
                                />
                                {errors.name && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col mb-4">
                                <label
                                    htmlFor="contact"
                                    className="mb-2 text-gray-500 font-medium"
                                >
                                    Contact No.
                                </label>
                                <input
                                    id="contact"
                                    type="text"
                                    placeholder="647-789-3000"
                                    value={values.phone}
                                    onChange={handleChange("phone")}
                                    className={`
                                        border ${
                                            errors.phone
                                                ? "border-danger"
                                                : "border-gray-300"
                                        } px-3 sm:px-5 py-2 sm:py-3
                                    `}
                                />
                                {errors.phone && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col mb-4">
                                <label
                                    htmlFor="location"
                                    className="mb-2 text-gray-500 font-medium"
                                >
                                    City/Town Name
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Toronto, ON"
                                    value={values.location}
                                    onChange={handleChange("location")}
                                    className={`border ${
                                        errors.location
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } px-3 sm:px-5 py-2 sm:py-3`}
                                />
                                {errors.location && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.location}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col mb-4">
                                <label className="mb-2 text-gray-500 font-medium z-50">
                                    What To Clean?{" "}
                                    <div className="tooltip">
                                        <Image
                                            width="16"
                                            height="16"
                                            placeholder="empty"
                                            src="/images/info.png"
                                            onClick={onTooltipToggle}
                                        />
                                        <div
                                            ref={tooltipMenuRef}
                                            className="right text-white"
                                        >
                                            <div className="text-content">
                                                To generate an estimate we need
                                                to know no. of rugs, bedrooms,
                                                living rooms, steps of stairs,
                                                hallways, need measurements (for
                                                open spaces like basement), how
                                                many seating units (for
                                                couches/sofas) &amp; size of
                                                mattress (king, queen, single or
                                                double).
                                            </div>
                                            <i></i>
                                        </div>
                                    </div>
                                </label>
                                <p className="text-gray-400 mb-2"></p>
                                <textarea
                                    rows={3}
                                    value={values.clean}
                                    onChange={handleChange("clean")}
                                    placeholder="What would you like to clean?"
                                    className={`border ${
                                        errors.clean
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } px-3 sm:px-5 py-2 sm:py-3`}
                                />
                                {errors.clean && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.clean}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="border-2 border-my-theme bg-my-theme cursor-pointer px-3 sm:px-5 w-full h-12 flex justify-center text-white items-center text-base sm:text-lg xl:text-xl font-semibold"
                                >
                                    {isSubmitting ? <Loader /> : "SUBMIT"}
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Banner;
