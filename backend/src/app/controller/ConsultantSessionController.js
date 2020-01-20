import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Bcrypt from 'bcryptjs';
import authConfig from '../../config/auth';
import Consultant from '../models/Consultant';

class ConsultantSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required(),
    });

    const { name, password } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Check your credentials' });
    }
    const consultant = await Consultant.find({
      name,
    });

    if (!Bcrypt.compare(password, consultant.password)) {
      return res.status(400).send({ message: 'The password is invalid' });
    }

    if (!consultant) {
      return res.status(401).json({ error: 'Consultant does not exits' });
    }

    return res.json({
      consultant: {
        name,
      },
      token: jwt.sign({ name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new ConsultantSessionController();
