import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  openId: {
    type: String,
    required: true,
  },
  userType: { type: String, enum: ['member', 'guest'], default: 'guest' },
  coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
  discounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }],
});

const User = mongoose.model('User', userSchema);
export default User;
