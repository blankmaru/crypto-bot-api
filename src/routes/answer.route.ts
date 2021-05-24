import * as express from 'express';

const router = express.Router();

import {
    create,
    getAnswers
} from '../controllers/answer.controller';

router.post('/', create);
router.get('/', getAnswers);

export default router;