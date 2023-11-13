import express from 'express';
const router = express.Router();
import { handleUserRegistration } from '../controllers/userController.js';

router.route('/registerUser').post(handleUserRegistration);

export default router;
