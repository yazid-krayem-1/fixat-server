import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  // Handle GET request for loans
  res.send('Loans route');
});

export default router;
