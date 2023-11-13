import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  openId: {
    type: String,
    required: true,
  },
  isMember: { type: Boolean, default: false },
  memberProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },
});

const User = mongoose.model('User', userSchema);
export default User;
