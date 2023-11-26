import mongoose from 'mongoose';
import connectDB from './db.js';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import Member from '../models/memberModel.js';
import Event from '../models/eventModel.js';
import Discount from '../models/discountModel.js';
import Coupon from '../models/couponModel.js';
import { eventSeed, userSeed, discountSeed, couponSeed } from './seed-data.js';

dotenv.config();

const seedDB = async () => {
  try {
    await connectDB();

    // Clear the existing data
    await User.deleteMany({});
    await Member.deleteMany({});
    await Event.deleteMany({});
    await Discount.deleteMany({});
    await Coupon.deleteMany({});

    // Seed new Event data and store the inserted events
    const insertedEvents = await Event.insertMany(eventSeed);

    // Seed new User data
    let insertedUsers = await User.insertMany(userSeed);

    // Create and insert the Member document for Alice Johnson
    const aliceUserId = insertedUsers.find(
      user => user.name === 'Alice Johnson'
    )._id;
    const aliceMemberData = {
      userAccount: aliceUserId,
      // ...other member fields...
      signupDate: new Date(),
      membershipExpirationDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ),
    };
    const aliceMember = new Member(aliceMemberData);
    const savedAliceMember = await aliceMember.save();

    // Update Alice Johnson's User document with the correct memberProfile ObjectId
    await User.findByIdAndUpdate(aliceUserId, {
      memberProfile: savedAliceMember._id,
    });

    // Assign Alice to the first two events in the eventsSeed array
    await User.findByIdAndUpdate(aliceUserId, {
      $push: {
        eventsAttended: {
          $each: [insertedEvents[0]._id, insertedEvents[1]._id],
        },
      },
    });

    // Seed Discount and Coupon data
    await Discount.insertMany(discountSeed);
    await Coupon.insertMany(couponSeed);

    console.log('Seeding complete!');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDB().catch(error => {
  console.error('Seeding encountered an error:', error);
});
