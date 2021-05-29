import * as express from 'express';

const router = express.Router();

import {
    create,
    getQuestions,
    deleteQuestion
} from '../controllers/question.controller';

router.post('/', create);
router.get('/:userID', getQuestions);
router.delete('/:id', deleteQuestion);

export default router;
