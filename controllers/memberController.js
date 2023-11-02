import Member from '../models/memberModel.js';
import generateToken from '../utils/generateToken.js';

export const handleSignup = async (req, res) => {
  res
    .status(200)
    .json({ message: 'Signup initiated. Proceed to the next step.' });
};

export const handleForeignStatus = async (req, res) => {
  try {
    const { isForeignPassportHolder } = req.body;

    req.member.isForeignPassportHolder = isForeignPassportHolder;
    await req.member.save();

    res.status(200).json({
      message: 'Foreign status recorded. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleDetails = async (req, res) => {
  try {
    const { name, email, birthday, nationality, area, phone, wechatID } =
      req.body;

    req.member.name = name;
    req.member.email = email;
    req.member.birthday = birthday;
    req.member.nationality = nationality;
    req.member.area = area;
    req.member.phone = phone;
    req.member.wechatID = wechatID;

    await req.member.save();

    res.status(200).json({
      message: 'Details recorded. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

// work and children
export const handleAvailability = async (req, res) => {
  try {
    const { worksOnWeekdays, hasChildren, childrenAgeGroup } = req.body;

    req.member.worksOnWeekdays = worksOnWeekdays;
    req.member.hasChildren = hasChildren;
    req.member.childrenAgeGroup = childrenAgeGroup;

    await req.member.save();

    res.status(200).json({
      message: 'Work and children data saved. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleInterests = async (req, res) => {
  try {
    const { interestedActivities } = req.body;

    req.member.interestedActivities = interestedActivities;
    await req.member.save();

    res.status(200).json({
      message: 'Activity preferences saved. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleLeadActivity = async (req, res) => {
  try {
    const { leadingActivitiesInterest } = req.body;

    req.member.leadingActivitiesInterest = leadingActivitiesInterest;
    await req.member.save();

    res.status(200).json({
      message: 'New activity interests saved. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleFeedback = async (req, res) => {
  try {
    const { feedback } = req.body;

    req.member.feedback = feedback;

    await req.member.save();

    res.status(200).json({
      message: 'Feedback recorded. Proceed to agree to terms and conditions.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleTerms = async (req, res) => {
  try {
    const { acceptedTermsAndConditions } = req.body;

    if (!acceptedTermsAndConditions || acceptedTermsAndConditions !== 'agree') {
      return res.status(400).json({
        error: 'You must agree to the terms and conditions to proceed.',
      });
    }

    req.member.acceptedTermsAndConditions = true;
    await req.member.save();

    res.status(200).json({
      message: 'You have successfully signed up as a member.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};
