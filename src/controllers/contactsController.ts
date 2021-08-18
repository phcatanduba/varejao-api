import { Request, Response, NextFunction } from 'express';

import * as contactsServices from '../services/contactsServices';

export async function create(req: Request, res: Response) {
    const { contacts }: { contacts: object[] } = req.body;
    if (!contacts) {
        res.sendStatus(400);
    } else {
        try {
            {
                const result = await contactsServices.isValid(contacts);
                if (result.error === 0) {
                    await contactsServices.create(contacts);
                    res.sendStatus(200);
                } else {
                    res.status(400).send(`Error in ${result.error}.º contact`);
                }
            }
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
