import express from "express";
import http from 'http';
import { router } from "./routes";


export const expressServer = express();
export const httpServer = new http.Server(expressServer);

expressServer.use("/", router);



