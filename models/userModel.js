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
  eventsAttended: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

const User = mongoose.model('User', userSchema);
export default User;
