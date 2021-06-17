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
    phone: Yup.string().required("Please enter your contact no."),
    clean: Yup.string().required(
        "Please enter what thing would you like to clean"
    ),
    city: Yup.string().required(
        "Please enter your city/town name or postal code"
    ),
});

export { InfoSchema, ContactSchema };
