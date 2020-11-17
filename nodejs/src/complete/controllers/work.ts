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

const fileLocation = path.join(__dirname, '../../data/work.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export async function work(req: Request, res: Response, next: NextFunction): Promise<Response<Iwork>> {
    return res.status(200).json(file);
};

export async function addWork(req: Request, res: Response, next: NextFunction) {
    file.work.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.work));
    res.send(); 
}
