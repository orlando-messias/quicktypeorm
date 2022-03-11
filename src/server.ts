import express from 'express';
import './database';
import 'reflect-metadata';
import usersRoute from './routes/users';

const app = express();
const PORT = 3001;

app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
})