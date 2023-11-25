import express from 'express';
import {
  getAllDiscounts,
  getDiscount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} from '../controllers/discountController.js';

const router = express.Router();

router.get('/', getAllDiscounts);
router.post('/', createDiscount);

router.get('/:id', getDiscount);
router.put('/:id', updateDiscount);
router.delete('/:id', deleteDiscount);

export default router;
