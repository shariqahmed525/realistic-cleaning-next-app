import axios from "axios";

const emailSender = async (obj) => {
    try {
        const { data } = await axios.post(
            "",
            { ...obj }
        );
        console.log(data);
    } catch (error) {
        console.log("got error in email sender ===> ", error.message);
    }
};

export default emailSender;
