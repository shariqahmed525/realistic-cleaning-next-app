import axios from "axios";

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

export default emailSender;
