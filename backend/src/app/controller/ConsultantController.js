import Bcrypt from 'bcryptjs';
import Consultant from '../models/Consultant';

class ConsultantController {
  async store(req, res) {
    const { name, email } = req.body;

    const password = Bcrypt.hashSync(req.body.password, 10);

    try {
      const consultant = await Consultant.create({
        name,
        password,
        email,
      });
      return res.json(consultant);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async index(req, res) {
    return res.json();
  }
}

export default new ConsultantController();
