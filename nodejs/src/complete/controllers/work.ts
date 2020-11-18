import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../data/work.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Iwork {
    work: IworkItem[];
}

export interface IworkItem {
    role: string;
    company: string;
    location: string;
    skills: string[];
    period: string
}

export async function work(req: Request, res: Response, next: NextFunction): Promise<Response<Iwork>> {
    return res.status(200).json(file);
};

export async function addWork(req: Request, res: Response, next: NextFunction) {
    file.work.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.work));
    res.status(200).send({ 'added': true });
};

export async function updateWork(req: Request, res: Response, next: NextFunction): Promise<void> {
    const index = req.params.id;
    const body: IworkItem = req.body;
    
    file.work[index].role = body.role;
    file.work[index].company = body.company;
    file.work[index].location = body.location;
    file.work[index].skills = body.skills;
    file.work[index].period = body.period;

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send({ 'updated': true });
};
