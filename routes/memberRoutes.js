import express from 'express';
const router = express.Router();
import {
  handleSignup,
  handleForeignStatus,
  handleDetails,
  handleAvailability,
  handleActivities,
  handleLeadActivity,
  handleReferral,
  handleTerms,
} from '../controllers/memberController.js';

router.route('/v1/foreignStatus').post(handleForeignStatus);
router.route('/v1/signup').post(handleSignup);
router.route('/v1/details').post(handleDetails);
router.route('/v1/availability').post(handleAvailability);
router.route('/v1/activities').post(handleActivities);
router.route('/v1/leadActivity').post(handleLeadActivity);
router.route('/v1/referral').post(handleReferral);
router.route('/v1/terms').post(handleTerms);

export default router;
