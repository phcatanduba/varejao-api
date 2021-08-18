import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

import * as userController from './controllers/userController';
import * as middleware from './middlewares/authenticate';

const app = express();
app.use(cors());
app.use(express.json());

export async function init() {
    await connectDatabase();
}

export default app;
