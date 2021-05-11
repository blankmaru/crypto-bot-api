import * as express from 'express';

const router = express.Router();

import {
    findAll,
    update
} from '../controllers/user.controller';

router.get('/', findAll);
router.post('/', update);

export default router;
