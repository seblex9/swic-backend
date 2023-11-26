import express from 'express';
const router = express.Router();
import { handleSignup } from '../controllers/memberController.js';

router.route('/signup').post(handleSignup);

export default router;
