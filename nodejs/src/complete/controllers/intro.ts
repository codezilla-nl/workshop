import { Request, Response, NextFunction } from 'express';

export interface Iintro {
    intro: {
        aboutMe: string;
        description: string;
    }
}

export async function intro(req: Request, res: Response, next: NextFunction): Promise<Response<Iintro>> {
    return res.status(200).json({
        intro: {
            aboutMe: 'John',
            description: 'Something about me'
        }
    });
};
