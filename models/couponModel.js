import mongoose from 'mongoose';

const validateDiscount = function () {
  // 'this' refers to the document being saved.
  // If one field is set, the other must not be, hence the use of XOR (^) operator.
  return (this.discountAmount != null) ^ (this.discountPercentage != null);
};

const couponSchema = new mongoose.Schema(
  {
    retailer: { type: String, required: true },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: String,
    discountAmount: {
      type: Number,
      min: 0,
      validate: {
        validator: validateDiscount,
        message:
          'You can only set either discountAmount or discountPercentage, not both.',
      },
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
      validate: {
        validator: validateDiscount,
        message:
          'You can only set either discountAmount or discountPercentage, not both.',
      },
    },
    expirationDate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;
