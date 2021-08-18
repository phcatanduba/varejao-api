import { getRepository } from 'typeorm';
import joi from 'joi';
import Contacts from '../entities/Contacts';

export async function isValid(contacts: object[]) {
    const contactSchema = joi.object({
        name: joi.string().required(),
        cellphone: joi
            .string()
            .length(13)
            .pattern(/^[0-9]+$/)
            .required(),
    });
    const result: { error: number } = {
        error: 0,
    };
    contacts.forEach((contact, index) => {
        const resultValidation = contactSchema.validate(contact);
        if ('error' in resultValidation) {
            result['error'] = index + 1;
        }
    });
    return result;
}

export async function create(contacts: object[]) {
    contacts.forEach(async (contact) => {
        await getRepository(Contacts).insert(contact);
    });
}
