import { Router } from 'express';
import { createUser } from '../controllers/userController';

const route = Router();

// POST users/login
route.post('/', async (req, res) => {
  try {
    await createUser({
      username: req.body.user.username,
      email: req.body.user.email
    });
    return res.send('hi');
  } catch (e) {
    console.error(e);
    res.status(422).send('bhak madarchod');
  }
});

// POST users/register
route.post('/reg', (req, res) => {})

export const usersRoute = route;