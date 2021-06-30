import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        contact: {
            type: String,
        },
        location: {
            type: String,
        },
        clean: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Query = mongoose.models.query || mongoose.model("query", schema);

export default Query;
