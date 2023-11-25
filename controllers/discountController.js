import Discount from '../models/discountModel.js';

export const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find({});
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    const discount = await Discount.findById(id);
    if (!discount) {
      return res.status(404).json({ error: 'Discount not found' });
    }
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createDiscount = async (req, res) => {
  try {
    const newDiscount = await Discount.create(req.body);
    res.status(201).json(newDiscount);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const updateDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDiscount = await Discount.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDiscount) {
      return res.status(404).json({ error: 'Discount not found' });
    }
    res.json(updatedDiscount);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const deleteDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDiscount = await Discount.findByIdAndDelete(id);
    if (!deletedDiscount) {
      return res.status(404).json({ error: 'Discount not found' });
    }
    res.json({ message: 'Discount deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
