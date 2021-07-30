import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter your name"),
    subject: Yup.string().min(3, "Too Short!").max(100, "Too Long!"),
    email: Yup.string()
        .email("Invalid email!")
        .required("Please enter your email address"),
    message: Yup.string()
        .min(3, "Too Short!")
        .required("Please enter your message"),
});

const InfoSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter your name"),
    phone: Yup.string()
        .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
            message: "Invalid contact no.!",
        })
        .required("Please enter your contact no."),
    clean: Yup.string().required(
        "Please enter what thing would you like to clean"
    ),
    location: Yup.string().required(
        "Please enter your city/town name or postal code"
    ),
});

const UNIVERSAL_ERROR_MSG = "Sorry, something went wrong! Please try again!";

const GA_TRACKING_ID = "G-WL1N8FXN2T";
const FB_PIXEL_ID = "339113737618805";

export {
    InfoSchema,
    FB_PIXEL_ID,
    ContactSchema,
    GA_TRACKING_ID,
    UNIVERSAL_ERROR_MSG,
};
