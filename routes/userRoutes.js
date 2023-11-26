import express from 'express';
const router = express.Router();
import {
  handleUserRegistration,
  getUserProfile,
} from '../controllers/userController.js';

router.route('/registerUser').post(handleUserRegistration);
router.route('/:userId').get(getUserProfile);

export default router;
