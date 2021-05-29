import * as express from 'express';

const router = express.Router();

import {
    create,
    getAnswers,
    deleteAnswer
} from '../controllers/answer.controller';

router.post('/', create);
router.get('/:id', getAnswers);
router.delete('/:id', deleteAnswer);

export default router;