import React from "react";
import axios from "axios";
import Loader from "./Loader";
import { Formik } from "formik";
import { Element } from "react-scroll";
import { useToasts } from "react-toast-notifications";
import { ContactSchema, UNIVERSAL_ERROR_MSG } from "../utils/constant";

const INITIAL_VALUES = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactUS = () => {
    const { addToast } = useToasts();

    const onSubmit = async (formData, actions) => {
        try {
            const { data } = await axios.post("/api/contact", formData);
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

    return (
        <Element name="contact-us">
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
                        validateOnChange={false}
                        initialValues={INITIAL_VALUES}
                        validationSchema={ContactSchema}
                        onSubmit={(values, actions) => {
                            onSubmit(values, actions);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
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
                                        value={values.name}
                                        onBlur={handleBlur("name")}
                                        onChange={handleChange("name")}
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
                                        value={values.email}
                                        onBlur={handleBlur("email")}
                                        onChange={handleChange("email")}
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
                                        value={values.subject}
                                        onBlur={handleBlur("subject")}
                                        onChange={handleChange("subject")}
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
                                        value={values.message}
                                        onBlur={handleBlur("message")}
                                        onChange={handleChange("message")}
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
                                    disabled={isSubmitting}
                                    className="bg-my-theme w-full h-12 text-white uppercase mx-auto text-lg justify-center"
                                >
                                    {isSubmitting ? <Loader /> : "SEND"}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </Element>
    );
};

export default ContactUS;
