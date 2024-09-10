import dotenv from "dotenv";

export default {
    PORT: process.env.PORT || 8080,
    MONGO_LINK: process.env.MONGO_LINK || "",
    PERSISTENCE: process.env.PERSISTENCE || "MONGO",
    FRONT_DOMAIN: process.env.FRONT_DOMAIN || "",
    GMAIL_USER_APP: process.env.GMAIL_USER_APP || "",
    GMAIL_PASS_APP: process.env.GMAIL_PASS_APP || "",
    TEST: process.env.TEST || "error"
};
