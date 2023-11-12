import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  isForeignPassportHolder: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^[\w.-]+@\w+\.\w+$/, 'Please enter a valid email address.'],
  },
  birthday: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value > Date.now();
      },
      message: 'Birthday cannot be in the future.',
    },
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  area: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  wechatID: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  worksOnWeekdays: {
    type: Boolean,
    required: true,
  },
  hasChildren: {
    type: Boolean,
    required: true,
  },
  childrenAgeGroup: {
    type: String,
    required: function () {
      return this.hasChildren;
    },
    enum: [
      '0-24 months',
      '2-3 years',
      '6-11 years',
      '12-15 years',
      '15 years +',
    ],
  },
  interestedActivities: {
    type: [String],
    required: true,
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
  leadingActivitiesInterest: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
  },
  learnedAboutSWIC: {
    type: String,
    required: true,
    enum: ['Online search', 'Friends', 'WeChat', 'Facebook', 'Other'],
  },
  feedback: {
    type: String,
    trim: true,
  },
  acceptedTermsAndConditions: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (value) {
        return value === true;
      },
      message: 'You must accept the terms and conditions.',
    },
  },
});

const Member = mongoose.model('Member', memberSchema);

export default Member;
