// import mongoose from "mongoose";
// const uniqueValidator = require("mongoose-unique-validator");

// const schema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//         },
//         email: {
//             type: String,
//             lowercase: true,
//         },
//         deleted: {
//             type: Boolean,
//             default: false,
//         },
//         blocked: {
//             type: Boolean,
//             default: false,
//         },
//         provider: {
//             type: String,
//         },
//         picture: {
//             type: String,
//         },
//         facebookId: {
//             type: String,
//         },
//         googleId: {
//             type: String,
//         },
//         appleId: {
//             type: String,
//         },
//         pin: {
//             type: String,
//             default: null,
//         },
//         phone: {
//             type: String,
//         },
//         deviceToken: {
//             type: String,
//         },
//         paypalEmail: {
//             type: String,
//             lowercase: true,
//         },
//         stripeCustomerId: {
//             type: String,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// schema.plugin(uniqueValidator, { message: "{PATH} already exist." });

// const User = mongoose.model("user", schema);

// module.exports = User;
