import * as express from 'express';

const router = express.Router();

import {
    findAll
} from '../controllers/user.controller';

router.get('/', findAll);

export default router;
