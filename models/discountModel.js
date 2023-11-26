import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
  retailer: { type: String, required: true },
  description: String,
  discountAmount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  expirationDate: { type: Date, required: true },
});

const Discount = mongoose.model('Discount', discountSchema);

export default Discount;
