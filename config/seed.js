import mongoose from 'mongoose';
import connectDB from './db.js';
import dotenv from 'dotenv';
dotenv.config();
import User from '../models/userModel.js';
import Member from '../models/memberModel.js';
import Event from '../models/eventModel.js';
import Discount from '../models/discountModel.js';
import Coupon from '../models/couponModel.js';
import {
  eventSeed,
  userSeed,
  memberSeed,
  discountSeed,
  couponSeed,
} from './seed-data.js';

const seedDB = async () => {
  await connectDB();

  // Clear the existing data
  await User.deleteMany({});
  await Member.deleteMany({});
  await Event.deleteMany({});
  await Discount.deleteMany({});
  await Coupon.deleteMany({});

  // Seed new data
  await Event.insertMany(eventSeed);
  const wineAndCheeseEvent = await Event.findOne({
    title: 'Wine and Cheese Soiree',
  });
  const majiangSocialEvent = await Event.findOne({
    title: 'Majiang Social',
  });
  await User.insertMany(
    userSeed.map(user => {
      if (user.name === 'Alice Johnson') {
        user.eventsAttended.push(wineAndCheeseEvent._id);
        user.eventsAttended.push(majiangSocialEvent._id);
      }
      return user;
    })
  );
  await Member.insertMany(memberSeed);
  await Discount.insertMany(discountSeed);
  await Coupon.insertMany(couponSeed);
};

seedDB().then(() => {
  mongoose.disconnect(); // Optionally disconnect if you want to close the script after seeding
  console.log('Seeding complete!');
});
