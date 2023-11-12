import Event from '../models/eventModel.js';

// List all events
export const listEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Show single event details
export const showEvent = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  res.json(event);
};

// Register for an event
export const registerEvent = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (event.attendees.length < event.capacity) {
    event.attendees.push({
      user: req.user._id,
      profilePicture: req.user.profilePicture,
    });
    await event.save();
    res.json({ message: 'Registered successfully' });
  } else {
    res.status(400).json({ message: 'Event is at full capacity' });
  }
};

// Process event payment and checkout
export const processPayment = async (req, res) => {
  // Payment processing logic goes here
  // Upon successful payment:
  res.json({
    message: 'Payment successful, you are now registered for the event.',
  });
};

export default { listEvents, showEvent, registerEvent, processPayment };
