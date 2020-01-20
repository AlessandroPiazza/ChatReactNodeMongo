import mongoose from 'mongoose';

const ConsultantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

export default mongoose.model('Consultant', ConsultantSchema);
