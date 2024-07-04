import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema({
  content: {
    type: string,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const SubTodo = mongoose.model('SubTodo', subtodoSchema);
