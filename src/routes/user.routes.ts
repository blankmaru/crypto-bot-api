import * as express from 'express';

const router = express.Router();

import {
    findAll,
    createNewUser
} from '../controllers/user.controller';

router.get('/', findAll);
router.post('/', createNewUser);

export default router;
