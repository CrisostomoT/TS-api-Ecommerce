import express, { Application } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.set('port', process.env.PORT);

app.use(morgan("dev"));
app.use(cors);
app.use(express.json());

export default app;