import express from 'express';
import {
  createEvent,
  updateEvent,
  listEvents,
  showEvent,
  registerEvent,
  deleteEvent,
  processEventPayment,
} from '../controllers/eventController.js';

const router = express.Router();

router.get('/', listEvents);
router.post('/', createEvent);

router.get('/:eventId', showEvent);
router.patch('/:eventId', updateEvent);
router.post('/:eventId/register', registerEvent);
router.post('/:eventId/checkout', processEventPayment);
router.delete('/:eventId', deleteEvent);

export default router;
