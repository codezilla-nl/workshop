import { Request, Response, NextFunction } from 'express';

export interface Iwork {
    work: [{
        role: string;
        company: string;
        location: string;
        skills: string[];
        period: string
    }]
}

export async function work(req: Request, res: Response, next: NextFunction): Promise<Response<Iwork>> {
    return res.status(200).json({
        work: [{
            role: 'Developer',
            company: 'MyCompany',
            location: 'Amsterdam',
            skills: ['Java', 'JavaScript', '.NET'],
            period: '2018-2020'
        },
        {
            role: 'Tester',
            company: 'AnotherCompany',
            location: 'Amsterdam',
            skills: ['Cucumber', 'Cypress', 'CodeceptJS'],
            period: '2016-2028'
        }]
    });
};
