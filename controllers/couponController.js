import Coupon from '../models/couponModel.js';

export const createCoupon = async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }
    res.json(coupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!coupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }
    res.json(coupon);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const patchCoupon = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the coupon by ID
    const coupon = await Coupon.findById(id);

    // If coupon doesn't exist, return an error
    if (!coupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }

    // Update the fields that are provided in the request body
    Object.keys(req.body).forEach(key => {
      coupon[key] = req.body[key];
    });

    // Save the updated coupon, this will run the validation against the full document
    const updatedCoupon = await coupon.save();

    // Send the updated coupon as a response
    res.json(updatedCoupon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }
    res.json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
