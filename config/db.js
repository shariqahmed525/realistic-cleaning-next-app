import mongoose from "mongoose";

const MONGODB_CONN_STR = process.env.MONGO_URI;

const databaseMiddleware = async (req, res, next) => {
    try {
        if (!global.mongoose) {
            global.mongoose = await mongoose.connect(MONGODB_CONN_STR, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });
            console.log("Database connected");
        }
    } catch (ex) {
        console.error(ex);
    }

    // You could extend the NextRequest interface
    // with the mongoose instance as well if you wish.
    // req.mongoose = global.mongoose;
    return next();
};

export default databaseMiddleware;
