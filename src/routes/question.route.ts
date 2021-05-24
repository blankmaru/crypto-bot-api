import * as express from 'express';

const router = express.Router();

import {
    create,
    getQuestions
} from '../controllers/question.controller';

router.post('/', create);
router.get('/:userID', getQuestions);

export default router;
