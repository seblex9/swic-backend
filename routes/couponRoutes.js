import express from 'express';
import {
  createCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  patchCoupon,
  deleteCoupon,
} from '../controllers/couponController.js';

const router = express.Router();

router.get('/', getAllCoupons);
router.post('/', createCoupon);

router.get('/:id', getCouponById);
router.put('/:id', updateCoupon);
router.patch('/:id', patchCoupon);
router.delete('/:id', deleteCoupon);

export default router;
