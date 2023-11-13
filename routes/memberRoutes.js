import express from 'express';
const router = express.Router();
import { handleSignup } from '../controllers/memberController.js';

// These routes are unsecured for development
router.route('/signup').post(handleSignup);

export default router;
