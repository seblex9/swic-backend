import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
  retailer: String,
  description: String,
  discountAmount: Number,
  expiryDate: Date,
});

const Discount = mongoose.model('Discount', discountSchema);

export default Discount;
