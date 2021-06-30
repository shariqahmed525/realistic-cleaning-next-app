import Contact from "../../models/contact";
import createHandler from "../../middleware";

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
