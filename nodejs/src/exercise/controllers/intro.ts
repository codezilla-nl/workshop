import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/intro.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Iintro {
    name: string;
}

export async function intro(req: Request, res: Response, next: NextFunction): Promise<Response<Iintro>> {
   return res.status(200).json(file);
};
