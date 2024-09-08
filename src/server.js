import express from "express";
import "dotenv/config.js";
import router from "./routes/index.js";
import cors from "cors";
import config from "./config/config.js";
import http from "http"
import { logger } from "./utils/error/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const server = express();

server.use(
    cors({
        origin: config.FRONT_DOMAIN,
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type'
    })
);

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', router)

server.use(errorHandler)
server.use(notFoundHandler)

server.options('*', cors());

const httpServer = http.createServer(server);

httpServer.listen(config.PORT, () => {
    logger.info("Server listening on port " + config.PORT);
});
