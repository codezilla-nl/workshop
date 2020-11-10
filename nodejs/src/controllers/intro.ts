import { Request, Response, NextFunction } from 'express';

export interface Iintro {
    name: string;
}

export async function intro(req: Request, res: Response, next: NextFunction): Promise<Iintro | Response> {
   return res.status(200).json({ name: 'John' });
};
