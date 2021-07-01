import axios from "axios";
import Contact from "../../models/contact";
import createHandler from "../../middleware";

const emailSender = async (obj) => {
    try {
        const { data } = await axios.post(
            "https://realistic-cleaning-send-mail.herokuapp.com/",
            { ...obj }
        );
        console.log(data);
    } catch (error) {
        console.log("got error in email sender ===> ", error.message);
    }
};

const handler = createHandler();

handler.post(async (req, res) => {
    const { name, email, subject, message } = req.body;
    const contactDetails = {
        name,
        email,
        subject,
        message,
    };
    const newContact = new Contact(contactDetails);
    newContact.save();
    if (newContact) {
        emailSender({ ...contactDetails, isEmail: true });
        res.json({
            success: true,
            message:
                "Your submission has been sent we will respond you shortly! Thanks.",
        });
    } else {
        res.json({
            success: false,
        });
    }
});

export default handler;
