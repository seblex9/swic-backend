import express from 'express';
const router = express.Router();
import {
  handleUserRegistration,
  handleUserEvents,
} from '../controllers/userController.js';

router.route('/registerUser').post(handleUserRegistration);
router.route('/:userId').get(handleUserEvents);

export default router;
