import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../data/hobbies.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Ihobbies {
    hobbies: IhobbiesItem;
}

export interface IhobbiesItem {
    title: string;
    passion: number;
}

export async function hobbies(req: Request, res: Response, next: NextFunction): Promise<Response<Ihobbies>> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/hobbies.json'), 'utf-8'));
    return res.status(200).json(file);
};

export async function addHobbies(req: Request, res: Response, next: NextFunction) {
    file.hobbies.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.hobbies));
    res.status(200).send({ 'added': true });
}

export async function updateHobbies(req: Request, res: Response, next: NextFunction) {
    const index = req.params.id;
    const body: IhobbiesItem = req.body;
    
    file.hobbies[index].title = body.title;
    file.hobbies[index].passion = body.passion;

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send({ 'updated': true });
}