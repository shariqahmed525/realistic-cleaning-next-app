import nextConnect from "next-connect";
import databaseMiddleware from "../config/db";

export default function createHandler(...middleware) {
    return nextConnect().use(databaseMiddleware, ...middleware);
}
