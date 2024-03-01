import { Router } from 'express';
import { getUsers, createUser } from '../app/controllers';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;
