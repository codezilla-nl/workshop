import { Request, Response } from 'express';

export async function intro(req: Request, res: Response) {
    res.send('Intro');
};
