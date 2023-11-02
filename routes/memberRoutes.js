import express from 'express';
const router = express.Router();
import {
  handleSignup,
  handleForeignStatus,
  handleDetails,
  handleAvailability,
  handleInterests,
  handleLeadActivity,
  handleFeedback,
  handleTerms,
} from '../controllers/memberController.js';
import authenticate from '../middleware/authMiddleware.js'; // Importing the JWT middleware

// No need for authentication on signup
router.route('/v1/signup').post(handleSignup);

// These routes are secured and require authentication
router.route('/v1/foreignStatus').post(authenticate, handleForeignStatus);
router.route('/v1/details').post(authenticate, handleDetails);
router.route('/v1/availability').post(authenticate, handleAvailability);
router.route('/v1/activities').post(authenticate, handleInterests);
router.route('/v1/leadActivity').post(authenticate, handleLeadActivity);
router.route('/v1/referral').post(authenticate, handleFeedback);
router.route('/v1/terms').post(authenticate, handleTerms);

export default router;
