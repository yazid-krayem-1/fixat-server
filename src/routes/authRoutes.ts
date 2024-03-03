import { Router } from 'express';
import { createUserController, loginController } from '../app/controllers';

const router = Router();

router.post('/login', loginController);
router.post('/register', createUserController);

export default router;
