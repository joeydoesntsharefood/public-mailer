import express from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import middleware from './middleware';
import connect from './config/database';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

connect()

app.use('/', middleware, router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});