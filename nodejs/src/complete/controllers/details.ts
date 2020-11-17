import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

export interface Idetails {
    details: {
        address: string;
        city: string;
        emailAddress: string;
        phoneNumber: string;
    }
}

export async function details(req: Request, res: Response, next: NextFunction): Promise<Idetails | Response> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/details.json'), 'utf-8'));
    return res.status(200).json(file);
};
