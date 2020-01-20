import * as Yup from 'yup';
import Chat from '../models/Chat';

class ChatController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid title' });
    }
    const { title } = req.body;
    try {
      const chat = await Chat.create({
        title,
      });
      return res.json(chat);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new ChatController();
