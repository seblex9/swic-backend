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

// No need for authentication on signup
router.route('/v1/signup').post(handleSignup);

// These routes are unsecured for development
router.route('/foreignStatus').post(handleForeignStatus);
router.route('/details').post(handleDetails);
router.route('/availability').post(handleAvailability);
router.route('/activities').post(handleInterests);
router.route('/leadActivity').post(handleLeadActivity);
router.route('/referral').post(handleFeedback);
router.route('/terms').post(handleTerms);

export default router;
