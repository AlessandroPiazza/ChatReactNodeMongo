import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid user data' });
    }
    const { name, email } = req.body;
    try {
      const user = await User.create({
        name,
        email,
      });
      return res.json(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new UserController();
