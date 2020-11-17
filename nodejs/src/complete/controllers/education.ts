import { Request, Response, NextFunction } from 'express';

export interface Ieducation {
    education: {
        period: string;
        institute: string;
        degree?: string;
        certificate: boolean;
    }
}

export async function education(req: Request, res: Response, next: NextFunction): Promise<Response<Ieducation>> {
    return res.status(200).json({
        education: [{
            period: '2008-2012',
            institute: 'University of Amsterdam',
            degree: 'B ICT',
            certificate: true
        },
        {
            period: '2003-2008',
            institute: 'High School',
            certificate: true
        }]
    });
};
