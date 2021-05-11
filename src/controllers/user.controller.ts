import { Request, Response } from 'express';
import User from "../models/User";

export const findAll = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        User.find({}, (err: Error, docs: any) => {
            if (!err) return res.status(200).send({ users: docs })
            if (err) return res.status(400).send({ error: err })
        })
    } catch(err) {
        return res.status(400).send({ error: err });
    }
}

export const update = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const id = req?.params.id;
        const { refProc } = req?.body;
        console.log(refProc)

        await User.findByIdAndUpdate(id, {$set: refProc}, (err: Error, user: any) => {
            if (err) return res.status(400).send(err);
            return res.status(200).send(user);
        });

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}