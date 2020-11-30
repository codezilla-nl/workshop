import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

// get the content from the JSON file
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

export async function getWork(req: Request, res: Response, next: NextFunction): Promise<Response<Iwork>> {
    // send the content in the JSON file
    return res.status(200).json(file);
};

export async function addWork(req: Request, res: Response, next: NextFunction) {
    // add new content to JSON
    file.work.push(req.body);

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file.work));

    // send success message
    res.status(200);
};

export async function updateWork(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get the id from the url
    const index = req.params.id;

    // get the post body
    const body: IworkItem = req.body;
    
    // assign new values to existing item
    file.work[index].role = body.role;
    file.work[index].company = body.company;
    file.work[index].location = body.location;
    file.work[index].skills = body.skills;
    file.work[index].period = body.period;

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file));

    // send success message
    res.status(200);
};

export async function deleteWork(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const id = req.params.id;
    
    // retrieve all items expect the one you want to delete
    const allWorkExpectTheRemovedOne = file.work.filter(item => {
        return item.id != id; // strict check does not remove the given id
    });

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify({ educations: allWorkExpectTheRemovedOne }));

    // send success message
    res.status(200);
}
