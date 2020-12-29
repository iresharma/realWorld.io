import express from 'express';
import { createConnection } from 'typeorm';
import { Article } from './models/article';
import { User } from './models/user';
import { userRoute } from './routes/user';
import { usersRoute } from './routes/users';

const App = express()
App.use(express.json());

App.get('/', (req, res) => {
  res.send('authHeader')
})

App.use('/api/users', usersRoute);
App.use('/api/user', userRoute);

async function start() {
  await createConnection({
    type: 'postgres',
    username: 'mediumadmin',
    password: 'medPass',
    database: 'mediumclone',
    entities: [User, Article],
    synchronize: true,
    logging: true,
    logger: 'advanced-console'
  });
App.listen(5000, () => {
  console.log('Server Started at 5000, bitches')
})
}

start();