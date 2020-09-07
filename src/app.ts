import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import indexRoutes from './routes/index';
dotenv.config();

const app: Application = express();


app.set('port', process.env.PORT || 8000);

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use('/api', indexRoutes)

app.use('/public', express.static(path.resolve('public')));

export default app;