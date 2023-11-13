import User from '../models/userModel.js';

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
      // Respond with an error if name or openID is not provided
      res.status(400);
      res.json({ message: 'Fail.' });
      throw new Error('Name and openID are required.');
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(req.body);
    res.status(400);
    res.json({
      msg: 'User already exists',
    });
    throw new Error('User data not submitted properly');
  }
};
