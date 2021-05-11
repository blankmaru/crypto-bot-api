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

        await User.updateOne({ _id: id }, { RefProc: refProc }).then((doc) => {
            return res.send('success');
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}