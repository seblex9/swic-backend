import Member from '../models/memberModel.js';
import User from '../models/userModel.js';

const createOrUpdateMember = async (userId, updateData) => {
  let member = await Member.findOne({ userAccount: userId });

  if (!member) {
    // No member found, let's create one with default values
    const signupDate = new Date();
    const membershipExpirationDate = new Date(
      signupDate.getTime() + 365 * 24 * 60 * 60 * 1000
    );

    member = await Member.create({
      userAccount: userId,
      signupDate,
      membershipExpirationDate,
      ...updateData, // Spread the rest of the updateData into the new document
    });
  } else {
    // Member exists, so we update it
    member = await Member.findOneAndUpdate(
      { userAccount: userId },
      updateData,
      { new: true, runValidators: true }
    );
  }

  return member;
};

export const handleSignup = async (req, res) => {
  const updateData = {};
  const fields = [
    'isForeignPassportHolder',
    'birthday',
    'nationality',
    'area',
    'phone',
    'wechatID',
    'worksOnWeekdays',
    'hasChildren',
    'childrenAgeGroup',
    'interestedActivities',
    'leadActivityDescription',
    'leadActivity',
    'activity',
    'learnedAboutSWIC',
    'feedback',
    'acceptedTermsAndConditions',
  ];

  // Collect data from the request body
  fields.forEach(field => {
    if (req.body.hasOwnProperty(field)) {
      updateData[field] = req.body[field];
    }
  });

  // Check if terms are accepted if present
  if (
    updateData.hasOwnProperty('acceptedTermsAndConditions') &&
    !updateData.acceptedTermsAndConditions
  ) {
    return res.status(400).json({ message: 'Terms must be accepted.' });
  }

  try {
    // First, check if the user exists
    const user = await User.findById(req.body.userAccount);
    console.log(req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // If user exists, create or update the member
    const member = await createOrUpdateMember(req.body.userAccount, updateData);
    res.status(200).json({
      message: 'Signup process complete. All provided data has been recorded.',
      member,
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Server Error.' });
  }
};
