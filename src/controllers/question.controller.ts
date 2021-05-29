import {Request, Response} from "express";
import Question from "../models/Question";
import Answer from "../models/Answer";

export const getQuestions = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {userID} = req.params;

        await Question.find({ userID: userID }).populate('@answers').then((docs) => {
            return res.status(200).send({ questions: docs });
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}

export const create = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {userID, username, text, chatID} = req.body;

        const newQuestion = new Question({
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

export const deleteQuestion = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.params;

        await Question.findByIdAndDelete(id).then((doc) => {
            return res.status(200).send({ message: 'delete success' });
        })

    } catch(err) {
        return res.status(400).send({ error: err });
    }
}