import express from 'express';
const router = express.Router();
import {
  handleForeignStatus,
  handleDetails,
  handleAvailability,
  handleInterests,
  handleLeadActivity,
  handleLearnedAbout,
  handleFeedback,
  handleTerms,
} from '../controllers/memberController.js';

// These routes are unsecured for development
router.route('/foreignStatus').post(handleForeignStatus);
router.route('/details').post(handleDetails);
router.route('/availability').post(handleAvailability);
router.route('/interests').post(handleInterests);
router.route('/leadActivity').post(handleLeadActivity);
router.route('/learnedAbout').post(handleLearnedAbout);
router.route('/feedback').post(handleFeedback);
router.route('/terms').post(handleTerms);

export default router;
