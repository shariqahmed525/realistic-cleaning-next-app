import React from "react";
import axios from "axios";
import Loader from "./Loader";
import { Formik } from "formik";
import BASE_URL from "../config";
import { Element } from "react-scroll";
import { useToasts } from "react-toast-notifications";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { SEND_CONTACT_EMAIL } from "../config/endpoints";
import { ContactSchema, UNIVERSAL_ERROR_MSG } from "../utils/constant";

const INITIAL_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const addressess = [
  {
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317856.9566635601!2d-89.30043308652978!3d42.02342772638017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880facbc21ce8c9f%3A0xfdf092f7ae3968a9!2sGlendale%20Heights%2C%20IL%2060139%2C%20USA!5e0!3m2!1sen!2s!4v1657034262582!5m2!1sen!2s",
    number: "(708) 316-1276",
    // address: "1171 Foxboro Ct, Bartlett, IL 60103, USA",
    locationName: "Illinois",
  },
  {
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312150.8019406184!2d-81.6486843800371!3d28.448253554489252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1657034134419!5m2!1sen!2s",
    number: "(407) 815-0978",
    // address: "1171 Foxboro Ct, Bartlett, IL 60103, USA",
    locationName: "Florida",
  },
  // {
  //   link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425342.19152700173!2d-112.40522904150365!3d33.605671056373296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d665410b2ced2b%3A0x73c32d384d16c715!2sTucson%2C%20AZ%2C%20USA!5e0!3m2!1sen!2s!4v1635222846460!5m2!1sen!2s",
  //   number: "+1 202-358-0309",
  //   // address: "1171 Foxboro Ct, Bartlett, IL 60103, USA",
  //   locationName: "Tucson Arizona",
  // },
];

const ContactUS = () => {
  const { addToast } = useToasts();

  const onSubmit = async (formData, actions) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}${SEND_CONTACT_EMAIL}`,
        formData
      );
      if (data?.success && data?.status && data?.data?.message) {
        addToast(data?.data?.message, {
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
      console.log("error ===> ", error?.message?.data?.response);
      addToast(UNIVERSAL_ERROR_MSG, {
        appearance: "error",
        autoDismiss: true,
      });
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
          backgroundImage:
            "url('https://evp.tax.gov.ua/data/material/000/384/484665/photo.jpg')",
        }}
      >
        <div className="bg-dark bg-opacity-80 flex flex-col justify-center items-center py-20 w-full">
          <h2 className="sec-title font-sans font-semibold text-2xl xs:text-3xl text-center text-white uppercase relative">
            CONTACT US
          </h2>
          <p className="mt-5 font-normal text-base xl:text-lg text-center text-white">
            Let's Get In Touch
          </p>
          <div className="flex xl:grid grid-cols-2 mt-10 w-full flex-col-reverse xl:flex-col">
            <Element name="contact-details">
              <div className="col-start-1 col-end-3 px-10 xl:col-start-1 xl:col-end-2 flex flex-col items-center justify-center w-full mt-0 sm:mt-8 xl:mt-0">
                {addressess.map((v, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center mt-20 sm:mt-12 xl:mt-14 w-full justify-center"
                  >
                    <iframe
                      src={v.link}
                      loading="lazy"
                      allowFullScreen=""
                      className="border-none w-full h-56 sm:w-56 sm:h-56 xl:w-64 xl:h-64 rounded-md sm:rounded-lg"
                    />
                    <div className="ml-0 sm:ml-10 mt-3 sm:mt-0">
                      {/* <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
                      {v.locationName}
                    </h3> */}
                      {v.address && (
                        <div className="mt-7 xl:mt-10">
                          <div className="flex flex-row items-center">
                            <div className="w-4 xl:w-5">
                              <AiOutlineEnvironment className="text-base xs:text-lg md:text-xl text-white" />
                            </div>
                            <p className="text-base sm:text-lg md:text-xl text-white ml-5 font-bold">
                              {v.address}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="mt-4 xl:mt-5">
                        <div className="flex flex-row items-center">
                          <div className="w-4 xl:w-5">
                            <AiOutlineEnvironment className="text-base xs:text-lg md:text-xl text-white" />
                          </div>
                          <p className="text-base sm:text-lg md:text-xl text-white ml-5 font-bold">
                            {v.locationName}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 xl:mt-5">
                        <div className="flex flex-row items-center">
                          <div className="w-4 xl:w-5">
                            <BsTelephone className="text-base xs:text-lg md:text-xl text-white" />
                          </div>
                          <p className="text-base sm:text-lg md:text-xl text-white ml-5 font-bold">
                            {v.number}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 xl:mt-5">
                        <div className="flex flex-row items-center">
                          <div className="w-4 xl:w-5">
                            <BsEnvelope className="text-base xs:text-lg md:text-xl text-white" />
                          </div>
                          <p className="text-base sm:text-lg md:text-xl text-white ml-5 font-bold">
                            realisticcleaning1@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Element>
            <div className="col-start-1 col-end-3 px-10 xl:col-start-2 xl:col-end-3 flex flex-col xl:self-center mt-8 xl:mt-0 items-center justify-center">
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
                    className="bg-white px-7 flex flex-1 flex-col justify-center items-center w-full sm:w-11/12 md:w-full xl:w-11/12 max-w-full md:max-w-xl py-7 shadow-2xl"
                  >
                    <p className="mt-2 mb-10 text-base sm:text-xl text-center sm:text-left">
                      For any inquiries, or to say hello, get in touch 👋
                    </p>
                    <div className="mb-5 w-full flex flex-col justify-center">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur("name")}
                        onChange={handleChange("name")}
                        placeholder="Name"
                        className={`flex w-full mx-auto py-2 sm:py-3 px-3 sm:px-5 border ${
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
                        className={`flex w-full mx-auto py-2 sm:py-3 px-3 sm:px-5 border ${
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
                        className={`flex w-full mx-auto py-2 sm:py-3 px-3 sm:px-5 border ${
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
                        className={`flex w-full mx-auto py-2 sm:py-3 px-3 sm:px-5 border ${
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
                      className="bg-secondary-my-theme w-full h-10 sm:h-12 text-white uppercase mx-auto text-base sm:text-lg justify-center"
                    >
                      {isSubmitting ? <Loader /> : "SEND"}
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactUS;
