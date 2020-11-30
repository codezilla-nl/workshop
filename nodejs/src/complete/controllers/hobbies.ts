import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

// get the content from the JSON file
const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/hobbies.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface Ihobbies {
    hobbies: IhobbiesItem;
}

export interface IhobbiesItem {
    title: string;
    passion: number;
}

export async function getHobbies(req: Request, res: Response, next: NextFunction): Promise<Response<Ihobbies>> {
    // send the content in the JSON file
    return res.status(200).json(file);
};

export async function addHobbies(req: Request, res: Response, next: NextFunction) {
    // add new content to JSON
    file.hobbies.push(req.body);

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file.hobbies));

    // send success message
    res.status(200);
}

export async function updateHobbies(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const index = req.params.id;

    // get the post body
    const body: IhobbiesItem = req.body;
    
    // assign new values to existing item
    file.hobbies[index].title = body.title;
    file.hobbies[index].passion = body.passion;

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file));

    // send success message
    res.status(200);
}

export async function deleteHobbies(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const id = req.params.id;
    
    // retrieve all items expect the one you want to delete
    const allHobbiesExpectTheRemovedOne = file.hobbies.filter(item => {
        return item.id != id; // strict check does not remove the given id
    });

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify({ hobbies: allHobbiesExpectTheRemovedOne }));

    // send success message
    res.status(200);
}