import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Bcrypt from 'bcryptjs';
import authConfig from '../../config/auth';
import User from '../models/User';

class UserSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required(),
    });

    const { name } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Check your credentials' });
    }
    const user = await User.find({
      name,
    });

    if (!user) {
      return res.status(401).json({ error: 'User does not exits' });
    }
    const { email } = user;
    return res.json({
      consultant: {
        name,
        email,
      },
      token: jwt.sign({ name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new UserSessionController();
