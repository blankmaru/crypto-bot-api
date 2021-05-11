import * as express from 'express';

const router = express.Router();

import {
    findAll,
    createNewUser,
    update
} from '../controllers/user.controller';

router.get('/', findAll);
router.post('/', createNewUser);

router.patch('/', update);

export default router;
