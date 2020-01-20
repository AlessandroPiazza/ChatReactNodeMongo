import * as Yup from 'yup';
import {} from 'date-fns';
import { ObjectId } from 'bson';
import Messages from '../models/Messages';
import User from '../models/User';
import Consultant from '../models/Consultant';

class MessagesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      message: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid' });
    }
    const { name, chatId } = req.params;
    const userExists = await User.find({
      name,
    });
    const consultantExists = await Consultant.find({
      name,
    });
    if (!userExists || !consultantExists) {
      return res.status(401).json({ error: 'Error' });
    }

    const { message } = req.body;

    try {
      const msg = await Messages.create({
        chatId,
        userName: name,
        message,
        date: new Date(),
      });
      return res.json(msg);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new MessagesController();
