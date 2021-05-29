import * as express from 'express';

const router = express.Router();

import {
    create,
    getQuestions,
    deleteQuestion,
    getAllQuestions
} from '../controllers/question.controller';

router.post('/', create);
router.get('/:userID', getQuestions);
router.get('/', getAllQuestions);
router.delete('/:id', deleteQuestion);

export default router;
