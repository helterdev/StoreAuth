import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes';
import cookieParser from 'cookie-parser'
import taskRouter from './routes/task.routes';
dotenv.config();
const app: express.Application = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRouter);
app.use('/api', taskRouter);
export default app;