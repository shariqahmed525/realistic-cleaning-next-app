import React, { useRef, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Image from "next/image";
import { Formik } from "formik";
import { Element } from "react-scroll";
import emailSender from "../utils/emailSender";
import { Link as ScrollLink } from "react-scroll";
import { useToasts } from "react-toast-notifications";
import { InfoSchema, UNIVERSAL_ERROR_MSG } from "../utils/constant";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  clean: "",
  zipCode: "",
};

const GetQuote = () => {
  const { addToast } = useToasts();
  let tooltipMenuRef = useRef(null);

  const onSubmit = async (formData, actions, again = false) => {
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
      onSubmit(formData, actions, true);
    } finally {
      if (!again && formData && Object.keys(formData).length !== 0) {
        emailSender({ ...formData, isEmail: true });
      }
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
    <Element name="contact-us">
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/images/bg-2.webp')",
        }}
      >
        <div className="bg-dark bg-opacity-80 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-0 lg:gap-4 w-full xl:w-10/12">
            <div className="col-span-2 lg:col-span-1 pt-20 px-10 flex flex-col justify-center">
              <p className="font-bold font-sans text-base sl:text-2xl md:text-3xl lg:text-4xl text-center lg:text-left text-white uppercase">
                You’ll be on the schedule shortly.
              </p>
              <p className="mt-3 font-base font-sans text-sm sm:text-base text-center lg:text-left text-white">
                Fill in all the required entry fields to finalize your schedule
                and you're good to go or you can simply click down below for an
                instant response. Further queries and other details are also
                mentioned down there.
              </p>
              <div className="mt-4 inline">
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  to={"get-quote"}
                  className="no-underline cursor-pointer "
                >
                  <button className="px-10 py-2.5 font-sans text-xs xs:text-sm bg-secondary-my-theme text-white rounded-full">
                    CLICK HERE
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 p-5 px-0 my-10 lg:my-0 flex flex-col justify-center items-center">
              <Element
                name="get-quote"
                className="w-full sm:w-11/12 md:w-full xl:w-11/12 max-w-full md:max-w-xl"
              >
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  validationSchema={InfoSchema}
                  initialValues={INITIAL_VALUES}
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
                      className="px-7 flex flex-1 flex-col justify-center items-center py-7 "
                    >
                      <div className="w-full flex flex-1 flex-col mb-6">
                        <label
                          htmlFor="name"
                          className="mb-2 font-sans text-white font-medium"
                        >
                          Name{" "}
                          <span className="text-my-theme font-bold text-xl">
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={values.name}
                          onChange={handleChange("name")}
                          className={`
                            border ${
                              errors.name ? "border-" : "border-gray-300"
                            } px-3 sm:px-5 py-2 sm:py-3 font-sans
                        `}
                        />
                        {errors.name && (
                          <p className="flex font-sans w-full mx-auto mt-2 text-sm text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-1 flex-col mb-6">
                        <label
                          htmlFor="contact"
                          className="mb-2 font-sans text-white font-medium"
                        >
                          Contact No.{" "}
                          <span className="text-my-theme font-bold text-xl">
                            *
                          </span>
                        </label>
                        <input
                          id="contact"
                          type="text"
                          placeholder="847-000-0000"
                          value={values.phone}
                          onChange={handleChange("phone")}
                          className={`
                            border ${
                              errors.phone ? "border-danger" : "border-gray-300"
                            } px-3 sm:px-5 py-2 sm:py-3 font-sans 
                        `}
                        />
                        {errors.phone && (
                          <p className="flex w-full font-sans mx-auto mt-2 text-sm text-red-400">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-1 flex-col mb-6">
                        <label
                          htmlFor="location"
                          className="mb-2 font-sans text-white font-medium"
                        >
                          Zip code{" "}
                          <span className="text-my-theme font-bold text-xl">
                            *
                          </span>
                        </label>
                        <input
                          id="location"
                          type="text"
                          placeholder="60000"
                          value={values.location}
                          onChange={handleChange("location")}
                          className={`border ${
                            errors.location
                              ? "border-danger"
                              : "border-gray-300"
                          } px-3 sm:px-5 py-2 sm:py-3 font-sans`}
                        />
                        {errors.location && (
                          <p className="flex w-full font-sans mx-auto mt-2 text-sm text-red-400">
                            {errors.location}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-1 flex-col mb-6">
                        <label className="mb-2 font-sans text-white font-medium z-50">
                          What To Clean?{" "}
                          <span className="text-my-theme font-bold text-xl">
                            *
                          </span>
                          <div className="tooltip ml-2">
                            <Image
                              width="16"
                              height="16"
                              placeholder="empty"
                              src="/images/info.webp"
                              onClick={onTooltipToggle}
                            />
                            <div
                              ref={tooltipMenuRef}
                              className="right text-white"
                            >
                              {/* <div className="text-content">
                              To generate an estimate we need to know no. of
                              rugs, bedrooms, living rooms, steps of stairs,
                              hallways, need measurements (for open spaces like
                              basement), how many seating units (for
                              couches/sofas) &amp; size of mattress (king,
                              queen, single or double).
                            </div> */}
                              <div className="text-content font-sans">
                                To generate an estimate we need to know no. of
                                furnaces, house size (in terms of square feet)
                                dryer vent if needed? Thanks.
                              </div>
                              <i></i>
                            </div>
                          </div>
                        </label>
                        <p className="text-white mb-2"></p>
                        <textarea
                          rows={3}
                          value={values.clean}
                          onChange={handleChange("clean")}
                          placeholder="I would like to clean...."
                          className={`border ${
                            errors.clean ? "border-danger" : "border-gray-300"
                          } px-3 sm:px-5 py-2 sm:py-3 font-sans`}
                        />
                        {errors.clean && (
                          <p className="flex w-full font-sans mx-auto mt-2 text-sm text-red-400">
                            {errors.clean}
                          </p>
                        )}
                      </div>

                      <button
                        disabled={isSubmitting}
                        className="bg-my-theme mt-2 w-full h-12 font-sans text-white uppercase mx-auto text-base justify-center"
                      >
                        {isSubmitting ? <Loader /> : "SEND"}
                      </button>
                    </form>
                  )}
                </Formik>
              </Element>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default GetQuote;
