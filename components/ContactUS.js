import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { ContactSchema } from "../utils/constant";

const INITIAL_VALUES = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactUS = () => {
    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post(``, formData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url('/images/bg-2.webp')",
            }}
        >
            <div className="bg-black bg-opacity-30 py-10 md:py-16 px-5 flex flex-col justify-center items-center">
                <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center text-white uppercase">
                    CONTACT US
                </h2>
                <p className="mt-1 font-normal text-base xl:text-lg text-center text-gray-200">
                    Let's Get In Touch
                </p>
                <Formik
                    initialValues={INITIAL_VALUES}
                    validationSchema={ContactSchema}
                    onSubmit={(values, actions) => {
                        onSubmit(values);
                        actions.resetForm();
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white px-7 flex flex-1 flex-col justify-center items-center mt-3 md:mt-7 w-full sm:w-11/12 md:w-full xl:w-11/12 max-w-full md:max-w-xl py-7 shadow-2xl"
                        >
                            <div className="mb-5 w-full flex flex-col justify-center">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onBlur={handleBlur}
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className={`flex w-full mx-auto py-3 px-5 border ${
                                        errors.name && touched.name
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } placeholder-gray-400`}
                                />
                                {errors.name && touched.name && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="mb-5 w-full flex flex-col justify-center">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className={`flex w-full mx-auto py-3 px-5 border ${
                                        errors.email && touched.email
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } placeholder-gray-400`}
                                />
                                {errors.email && touched.email && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="mb-5 w-full flex flex-col justify-center">
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={`flex w-full mx-auto py-3 px-5 border ${
                                        errors.subject && touched.subject
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } placeholder-gray-400`}
                                />
                                {errors.subject && touched.subject && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div className="mb-5 w-full flex flex-col justify-center">
                                <textarea
                                    rows={5}
                                    id="message"
                                    type="text"
                                    name="message"
                                    onBlur={handleBlur}
                                    value={values.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className={`flex w-full mx-auto py-3 px-5 border ${
                                        errors.message && touched.message
                                            ? "border-danger"
                                            : "border-gray-300"
                                    } placeholder-gray-400 resize-none`}
                                />
                                {errors.message && touched.message && (
                                    <p className="flex w-full mx-auto mt-2 text-sm text-danger">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-my-theme w-full py-2.5 text-white uppercase mx-auto flex text-lg justify-center"
                            >
                                SUBMIT
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactUS;