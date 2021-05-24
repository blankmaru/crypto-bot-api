import {Request, Response} from "express";
import Answer from "../models/Answer";

export const getAnswers = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {userID} = req.body;

        await Answer.find({ userID: userID }).then((docs) => {
            return res.status(200).send({ questions: docs });
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}

export const create = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {userID, username, text, chatID} = req.body;

        const newQuestion = new Answer({
            userID,
            username,
            text,
            chatID
        })

        await newQuestion.save((err, doc) => {
            if (err) return res.status(400).send({error: err});
            return res.status(200).send({ question: doc });
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}

export const deleteAnswer = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.body;

        await Answer.findByIdAndDelete(id).then((doc) => {
            return res.status(200).send({ message: 'delete success' });
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}
