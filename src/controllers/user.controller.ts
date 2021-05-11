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
        const { id } = req?.params;
        const { refProc } = req?.body;

        console.log(id)

        await User.findOneAndUpdate({ _id: id }, { RefProc: refProc }).then((doc) => {
            console.log(doc)
            return res.status(200).send({ message: 'success' })
        }).catch((err: Error) => res.status(400).send({ error: err }))

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}