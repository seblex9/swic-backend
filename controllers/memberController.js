import Member from '../models/memberModel.js';
import generateToken from '../utils/generateToken.js';

export const handleSignup = async (req, res) => {
  res
    .status(200)
    .json({ message: 'Signup initiated. Proceed to the next step.' });
};

export const handleForeignStatus = async (req, res) => {
  try {
    const { foreignStatus } = req.body;

    req.member.foreignStatus = foreignStatus;
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

export const handleWorkAndChildren = async (req, res) => {
  try {
    const { workStatus, hasChildren, childrenAgeGroup } = req.body;

    req.member.workStatus = workStatus;
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

export const handleActivities = async (req, res) => {
  try {
    const { activities } = req.body; // This should be an array of chosen activities

    req.member.activities = activities;
    await req.member.save();

    res.status(200).json({
      message: 'Activity preferences saved. Proceed to next step.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleNewActivity = async (req, res) => {
  try {
    const { newActivity } = req.body;

    req.member.newActivity = newActivity;
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
    const { feedbackSource, feedbackText } = req.body;

    req.member.feedbackSource = feedbackSource;
    req.member.feedbackText = feedbackText;

    await req.member.save();

    res.status(200).json({
      message: 'Feedback recorded. Proceed to agree to terms and conditions.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleTermsAndConditions = async (req, res) => {
  try {
    const { agreement } = req.body;

    if (!agreement || agreement !== 'agree') {
      return res.status(400).json({
        error: 'You must agree to the terms and conditions to proceed.',
      });
    }

    req.member.agreedToTerms = true;
    await req.member.save();

    res.status(200).json({
      message: 'You have successfully signed up as a member.',
      token: generateToken(req.member._id),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};
