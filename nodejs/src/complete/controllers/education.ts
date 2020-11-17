import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

export interface Ieducation {
    education: {
        period: string;
        institute: string;
        degree?: string;
        certificate: boolean;
    }
}

const fileLocation = path.join(__dirname, '../../data/education.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export async function education(req: Request, res: Response, next: NextFunction): Promise<Response<Ieducation>> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/education.json'), 'utf-8'));
    return res.status(200).json(file);
};

export async function addEducation(req: Request, res: Response, next: NextFunction) {
    file.education.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.education));
    res.send(); 
}
