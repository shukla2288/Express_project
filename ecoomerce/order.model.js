import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = mongoose.Schema(
  {
    orderprice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    orderItems: {
      type: [orderItemSchema],
    },
    adress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIEVERD'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
