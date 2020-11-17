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
    return res.status(200).json({
        details: {
            address: 'Tractieweg',
            city: 'Utrecht',
            emailAddress: 'info@company.com',
            phoneNumber: '+31612345678'
        }
    });
};
