import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  regularPrice: { type: Number, required: true },
  memberPrice: { type: Number, required: true },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
