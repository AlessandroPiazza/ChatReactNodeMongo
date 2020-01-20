import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Chat', ChatSchema);
