import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

// get the content from the JSON file
const fileLocation = path.join(__dirname, '../../../../reactjs/src/exercise/data/hobbies.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export interface IHobbies {
    hobbies: IHobbiesItem;
}

export interface IHobbiesItem {
    id?: number;
    description: string;
    title: string;
    passion: number;
}

export async function getHobbies(req: Request, res: Response, next: NextFunction): Promise<Response<IHobbies>> {
    // send the content in the JSON file
    return res.status(200).json(file);
};

export async function addHobbies(req: Request, res: Response, next: NextFunction) {
    // add new content to JSON
    file.items.push(req.body);

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file.items));

    // send success message
    res.status(200).send();
}

export async function updateHobbies(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const index = req.params.id;

    // get the post body
    const body: IHobbiesItem = req.body;
    
    // assign new values to existing item
    file.items[index].title = body.title;
    file.items[index].description = body.description;
    file.items[index].passion = body.passion;
    

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify(file));

    // send success message
    res.status(200).send();
}

export async function deleteHobbies(req: Request, res: Response, next: NextFunction) {
    // get the id from the url
    const id = req.params.id;
    
    // retrieve all items expect the one you want to delete
    const allHobbiesExpectTheRemovedOne = file.items.filter(item => {
        return item.id != id; // strict check does not remove the given id
    });

    // save JSON
    fs.writeFileSync(fileLocation, JSON.stringify({ items: allHobbiesExpectTheRemovedOne }));

    // send success message
    res.status(200).send();
}