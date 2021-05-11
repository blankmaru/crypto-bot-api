import * as express from 'express';

const router = express.Router();

import {
    findAll,
    update
} from '../controllers/user.controller';

router.get('/', findAll);
router.patch('/:id', update);

export default router;
