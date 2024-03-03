import { Router } from 'express';
import { getUsers } from '../app/controllers';

const router = Router();

router.get('/', getUsers);

export default router;
