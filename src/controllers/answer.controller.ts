import {Request, Response} from "express";
import Answer from "../models/Answer";
import Question from "../models/Question";

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
        const {userID, username, text, chatID, questionID} = req.body;

        const newAnswer = new Answer({
            userID,
            username,
            text,
            chatID
        })

        await newAnswer.save(async(err, doc) => {
            if (err) return res.status(400).send({error: err});
            await Question.findOneAndUpdate({ _id: questionID }, {answer: doc._id}).then((item) => {
                return res.status(200).send({ question: item, answer: doc });
            })
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
