import * as fs from 'fs';
import * as path from 'path';
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
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/work.json'), 'utf-8'));
    return res.status(200).json(file);
};
