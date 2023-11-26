import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  signupDate: {
    type: Date,
    default: Date.now,
  },
  membershipExpirationDate: {
    type: Date,
    required: [true, 'Membership expiration date is required.'],
    default: function () {
      return new Date(this.signupDate.getTime() + 365 * 24 * 60 * 60 * 1000);
    },
  },

  userAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true, // Ensures one-to-one relationship
  },
  isForeignPassportHolder: {
    type: Boolean,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
    validate: {
      validator: function (value) {
        return value < Date.now();
      },
      message: 'Birthday cannot be in the future.',
    },
  },
  nationality: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  area: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  phone: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  wechatID: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  worksOnWeekdays: {
    type: Boolean,
    required: false,
  },
  hasChildren: {
    type: Boolean,
    required: false,
  },
  childrenAgeGroup: {
    type: [String],
    required: function () {
      return this.hasChildren;
    },
    enum: [
      '0-24 months',
      '2-5 years',
      '6-11 years',
      '12-15 years',
      '16 years +',
    ],
  },
  interestedActivities: {
    type: [String],
    required: false,
    enum: [
      'Weekday coffee functions',
      'After work functions, e.g. cocktails hours',
      'Physical activities, i.e. hiking, biking',
      'Weekend social activities',
      'Craft activities',
      'Tots and baby activities',
      'Cooking activities',
      'Board game activities',
    ],
  },
  leadActivityDescription: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  leadActivity: {
    type: Boolean,
    required: false,
  },
  activity: {
    type: String,
    trim: true,
  },
  learnedAboutSWIC: {
    type: [String],
    required: false,
    enum: ['Online search', 'Friends', 'WeChat', 'Facebook', 'Other'],
  },
  feedback: {
    type: String,
    trim: true,
  },
  acceptedTermsAndConditions: {
    type: Boolean,
    required: false,
    validate: {
      validator: function (value) {
        return value === true;
      },
      message: 'You must accept the terms and conditions.',
    },
  },
  memberDetails: {
    coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
    discounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }],
  },
});

const Member = mongoose.model('Member', memberSchema);

export default Member;
