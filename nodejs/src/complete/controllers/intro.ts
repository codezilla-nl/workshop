import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/intro.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Iintro {
    aboutMe: string;
    age: number;
    description: string;
    welcomeMessage: string;
    goal: string;
}

export async function getIntro(req: Request, res: Response, next: NextFunction): Promise<Response<Iintro>> {
    return res.status(200).json(file);
};

export async function updateIntro(req: Request, res: Response, next: NextFunction): Promise<void> {
    const body: Iintro = req.body;

    file.aboutMe = body.aboutMe;
    file.age = body.age;
    file.description = body.description;
    file.welcomeMessage = body.welcomeMessage;
    file.goal = body.goal;

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send();
};