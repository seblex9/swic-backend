import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  openId: {
    type: String,
    required: true,
  },
  isMember: { type: Boolean, default: false },
  memberDetails: {
    coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
    discounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }],
  },
});

const User = mongoose.model('User', userSchema);
export default User;
