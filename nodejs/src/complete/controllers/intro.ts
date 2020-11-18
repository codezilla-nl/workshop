import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

const fileLocation = path.join(__dirname, '../../data/intro.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Iintro {
    intro: {
        aboutMe: string;
        description: string;
    }
}

export async function intro(req: Request, res: Response, next: NextFunction): Promise<Response<Iintro>> {
    return res.status(200).json(file);
};

export async function updateIntro(req: Request, res: Response, next: NextFunction): Promise<void> {
    file.intro.aboutMe = req.body.aboutMe
    file.intro.description = req.body.description

    fs.writeFileSync(fileLocation, JSON.stringify(file));
    res.status(200).send({ 'updated': true });
};