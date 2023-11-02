import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  discount: { type: Number, required: true },
});

const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;
