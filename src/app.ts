import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

import * as contactsController from './controllers/contactsController';
import * as userController from './controllers/userController';
import * as middleware from './middlewares/authenticate';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sign-up', userController.signup);

app.post('/sign-in', userController.signin);

app.post('/contacts', middleware.authenticate, contactsController.create);

export async function init() {
    await connectDatabase();
}

export default app;
