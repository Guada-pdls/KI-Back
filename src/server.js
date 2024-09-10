import express from "express";
import "dotenv/config.js";
import router from "./routes/index.js";
import cors from "cors";
import config from "./config/config.js";
import http from "http";
import { logger } from "./utils/error/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const server = express();

// Middleware de CORS, configurado correctamente
server.use(
    cors({
        origin: ['https://kingdom-institute-v2.vercel.app'], 
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type'],
    })
);

server.get('/favicon.ico', (req, res) => res.status(204));

// Middleware para parsear body de las solicitudes
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Rutas
server.use('/', router);

// Middlewares de manejo de errores
server.use(errorHandler);
server.use(notFoundHandler);

// Servidor HTTP
const httpServer = http.createServer(server);

httpServer.listen(config.PORT, () => {
    logger.info("Server listening on port " + config.PORT);
});
