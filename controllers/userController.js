import User from '../models/userModel.js';
import Member from '../models/memberModel.js';
import Event from '../models/eventModel.js';

export const handleUserRegistration = async (req, res) => {
  try {
    console.log(req.body);

    const { name, openId } = req.body;

    if (name && openId) {
      const userExists = await User.findOne({ openId });

      if (userExists && userExists.name !== name) {
        userExists.name = name;
        userExists.openID = openId;

        const updatedUser = await userExists.save();
        res.status(201);

        res.json({
          name: updatedUser.name,
          openId: updatedUser.openId,
          msg: 'success',
        });

        res.status(201);
      } else {
        const user = await User.create({
          name,
          openId,
        });

        if (user) {
          res.status(201);
          res.json({
            _id: user._id,
            name: user.name,
            openId: user.openId,
            msg: 'success',
          });
        }
      }
    } else {
      res.status(400);
      res.json({ message: 'Fail.' });
      throw new Error('Name and openID are required.');
    }
  } catch (error) {
    console.log(req.body);
    res.status(400);
    res.json({
      msg: 'User already exists',
    });
    throw new Error('User data not submitted properly');
  }
};

export const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'memberProfile',
        populate: { path: 'memberDetails.coupons memberDetails.discounts' }, // Populate nested paths if needed
      })
      .populate('eventsAttended');

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Using the isMember property from the User model directly
    const isMember = user.isMember;
    const membershipExpirationDate =
      isMember && user.memberProfile
        ? user.memberProfile.membershipExpirationDate
        : null;

    const now = new Date();
    const currentEvents = user.eventsAttended.filter(
      event => new Date(event.date) >= now
    );
    const pastEvents = user.eventsAttended.filter(
      event => new Date(event.date) < now
    );

    res.json({
      name: user.name,
      isMember,
      membershipExpirationDate,
      currentEvents,
      pastEvents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
