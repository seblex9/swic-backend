import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    creatorName: {
      type: String,
      required: true,
    },
    organizedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    title: { type: String, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    // From map API
    address: {
      eng: { type: String, required: false },
      chn: { type: String, required: false },
    },
    // From map API
    coordinates: {
      latitude: { type: Number, required: false },
      longitude: { type: Number, required: false },
    },
    description: { type: String, required: true },
    memberPrice: { type: Number, required: true },
    guestPrice: { type: Number, required: true },
    attendees: [
      {
        name: { type: String, required: true },
        isMember: { type: Boolean, required: true },
        avatarUrl: { type: String }, // Made optional as not all systems may provide an avatar URL
      },
    ],
    // MongoDB automatically creates a unique _id field for each document, so no need to define it here.
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;
