import axios from "axios";

const emailSender = async (obj) => {
    try {
        await axios.post(
            "https://realistic-cleaning-send-mail.herokuapp.com/",
            { ...obj }
        );
    } catch (error) {
        console.log("got error in email sender ===> ", error.message);
    }
};

export default emailSender;
