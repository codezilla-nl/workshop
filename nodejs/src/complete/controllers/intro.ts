import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

export interface Iintro {
    intro: {
        aboutMe: string;
        description: string;
    }
}

export async function intro(req: Request, res: Response, next: NextFunction): Promise<Response<Iintro>> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/intro.json'), 'utf-8'));
    return res.status(200).json(file);
};
