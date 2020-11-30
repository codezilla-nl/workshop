import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/details.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));
export interface IDetails {
    address: string;
    city: string;
    phoneNumber: string;
    emailAddress: string;
    story1: string;
    story2: string;
}

export async function getDetails(req: Request, res: Response, next: NextFunction): Promise<Response<IDetails>> {
    return res.status(200).json(file);
};

export async function updateDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get the post body
    const body: IDetails = req.body;

    file.address = body.address;
    file.city = body.city;
    file.phoneNumber = body.phoneNumber;
    file.emailAddress = body.emailAddress;
    file.story1 = body.story1;
    file.story2 = body.story2;

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send();
};
