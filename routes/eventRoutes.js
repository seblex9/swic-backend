import express from 'express';
import {
  listEvents,
  showEvent,
  registerEvent,
  processPayment,
} from '../controllers/eventController.js';

const router = express.Router();

// List all events
router.get('/', listEvents);

// Show single event
router.get('/:eventId', showEvent);

// Register for an event
router.post('/:eventId/register', registerEvent);

// Process payment for an event
router.post('/:eventId/checkout', processPayment);

export default router;
