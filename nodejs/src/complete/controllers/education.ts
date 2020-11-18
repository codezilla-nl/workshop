import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../data/education.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Ieducation {
    education: IeducationItem[];
}

export interface IeducationItem {
    id: boolean;
    period: string;
    institute: string;
    degree?: string;
    certificate: boolean;
}

export async function education(req: Request, res: Response, next: NextFunction): Promise<Response<Ieducation>> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/education.json'), 'utf-8'));
    return res.status(200).json(file);
};

export async function addEducation(req: Request, res: Response, next: NextFunction) {
    file.education.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.education));
    res.status(200).send({ 'added': true });
}

export async function updateEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    const index = req.params.id;
    const body: IeducationItem = req.body;
    
    file.education[index].period = body.period;
    file.education[index].institute = body.institute;
    file.education[index].degree = body.degree;
    file.education[index].certificate = body.certificate;

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send({ 'updated': true });
};
