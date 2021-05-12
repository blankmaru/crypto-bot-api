import * as express from 'express';

const router = express.Router();

import {
    findAll,
    update,
    deleteUser
} from '../controllers/user.controller';

router.get('/', findAll);
router.patch('/:id', update);
router.delete('/:id', deleteUser);

export default router;
