import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  chatId: {
    type: String,
  },
  userName: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
  },
});

export default mongoose.model('Message', MessageSchema);
