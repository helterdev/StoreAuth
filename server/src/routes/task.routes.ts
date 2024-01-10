import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken';
import {
  deleteTask,
  getTask,
  getTasks,
  postTask,
  putTask,
} from '../controllers/task.controller';

const router = Router();

router.get('/task', authRequired, getTasks);
router.post('/task', authRequired, postTask);
router.get('/task/:id', authRequired, getTask);
router.put('/task/:id', authRequired, putTask);
router.delete('/task/:id', authRequired, deleteTask);

export default router;
