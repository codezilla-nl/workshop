import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../data/details.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));
export interface Idetails {
    details: {
        address: string;
        city: string;
        emailAddress: string;
        phoneNumber: string;
    }
}

export async function details(req: Request, res: Response, next: NextFunction): Promise<Response<Idetails>> {
    return res.status(200).json(file);
};

export async function updateDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
    file.details.address = req.body.address
    file.details.city = req.body.city
    file.details.emailAddress = req.body.emailAddress
    file.details.phoneNumber = req.body.phoneNumber

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send({ 'updated': true });
};
