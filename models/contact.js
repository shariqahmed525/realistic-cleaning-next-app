import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.contact || mongoose.model("contact", schema);

export default Contact;
