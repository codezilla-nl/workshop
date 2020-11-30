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
    id: boolean;
    period: string;
    institute: string;
    degree?: string;
    certificate: boolean;
}

export async function getEducation(req: Request, res: Response, next: NextFunction): Promise<Response<Ieducation>> {
    // send the content in the JSON file
    return res.status(200).json(file);
};

export async function addEducation(req: Request, res: Response, next: NextFunction) {
    // add new content to JSON
    file.education.push(req.body);

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file.education));

    // send success message
    res.status(200);
}

export async function updateEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get the id from the url
    const index = req.params.id;

    // get the post body
    const body: IeducationItem = req.body;

    // assign new values to existing item
    file.education[index].period = body.period;
    file.education[index].institute = body.institute;
    file.education[index].degree = body.degree;
    file.education[index].certificate = body.certificate;

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file));

    // send success message
    res.status(200);
};

export async function deleteEducation(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const id = req.params.id;
    
    // retrieve all items expect the one you want to delete
    const allEducationsExpectTheRemovedOne = file.education.filter(item => {
        return item.id != id; // strict check does not remove the given id
    });

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify({ educations: allEducationsExpectTheRemovedOne }));

    // send success message
    res.status(200);
}