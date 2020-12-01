import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

// get the content from the JSON file
const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/education.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Ieducation {
    education: IeducationItem[];
}

export interface IeducationItem {
    id?: number;
    degree: string;
    location: string;
    institute: string;
    certificate: boolean;
    period: string;
}

export async function getEducation(req: Request, res: Response, next: NextFunction): Promise<Response<Ieducation>> {
    // send the content in the JSON file
    return res.status(200).json(file);
};

export async function addEducation(req: Request, res: Response, next: NextFunction) {
    // add new content to JSON
    file.items.push(req.body);

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file.items));

    // send success message
    res.status(200).send();
}

export async function updateEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get the id from the url
    const index = req.params.id;

    // get the post body
    const body: IeducationItem = req.body;

    // assign new values to existing item
    file.items[index].degree = body.degree;
    file.items[index].location = body.location;
    file.items[index].institute = body.institute;
    file.items[index].certificate = body.certificate;
    file.items[index].period = body.period;

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file));

    // send success message
    res.status(200).send();
};

export async function deleteEducation(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const id = req.params.id;
    
    // retrieve all items expect the one you want to delete
    const allEducationsExpectTheRemovedOne = file.items.filter(item => {
        return item.id != id; // strict check does not remove the given id
    });

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify({ items: allEducationsExpectTheRemovedOne }));

    // send success message
    res.status(200).send();
}