import express from 'express';
import matchHistory from './matchHistory.controller.js';
const server = express();
server.use('/', matchHistory);
export default server;
