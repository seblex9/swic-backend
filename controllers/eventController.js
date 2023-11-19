import Event from '../models/eventModel.js';
import User from '../models/userModel.js'; // Import the User model

export const createEvent = async (req, res) => {
  try {
    const { organizedBy, createdBy } = req.body;

    // Ensure there's at least one organizer
    if (
      !organizedBy ||
      !Array.isArray(organizedBy) ||
      organizedBy.length === 0
    ) {
      return res
        .status(400)
        .json({ message: 'At least one organizer is required' });
    }
    if (!createdBy) {
      return res.status(400).json({ message: 'Creator user ID is required' });
    }

    // Find the user by the ID provided in the request to get the name
    const creator = await User.findById(createdBy);
    if (!creator) {
      return res.status(404).json({ message: 'Creator user not found' });
    }

    // Proceed with creating the event using the user ID and name from the User collection
    const newEvent = new Event({
      ...req.body,
      createdBy: createdBy,
      creatorName: creator.name, // Set from the found User document
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating a new event' });
  }
};

export const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ message: 'Invalid event ID' });
    }
    res.status(500).json({ message: 'Error updating the event' });
  }
};

export const listEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name');
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching events' });
  }
};

export const showEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId).populate(
      'createdBy',
      'name'
    );
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching event details' });
  }
};

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
export const processEventPayment = async (req, res) => {
  // Payment processing logic goes here
  // Upon successful payment:
  res.json({
    message: 'Payment successful, you are now registered for the event.',
  });
};

export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    const result = await Event.findByIdAndDelete(eventId);
    if (!result) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting the event' });
  }
};

export default {
  createEvent,
  updateEvent,
  listEvents,
  showEvent,
  registerEvent,
  deleteEvent,
  processEventPayment,
};
