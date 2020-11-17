import { Request, Response, NextFunction } from 'express';

export interface Ihobbies {
    hobbies: {
        title: string;
        passion: number;
    }
}

export async function hobbies(req: Request, res: Response, next: NextFunction): Promise<Response<Ihobbies>> {
    return res.status(200).json({
        hobbies: [{
            title: 'Video Games',
            passion: 5
        },
        {
            title: 'Reading',
            passion: 4
        },
        ]
    });
};



