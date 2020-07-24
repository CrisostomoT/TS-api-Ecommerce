import express, { Application } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import indexRoutes from './routes/index';

const app: Application = express();

dotenv.config();

app.set('port', process.env.PORT || 8000);

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use('/api', indexRoutes)

app.use('/public', express.static(path.resolve('public')));

export default app;