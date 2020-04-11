import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'leonaseo silva',
    email: 'leosdesousa@gmail.com',
    password_hash: '15135153135148',
  });

  return res.json(user);
});

export default routes;
