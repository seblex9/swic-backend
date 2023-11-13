import Member from '../models/memberModel.js';

const createOrUpdateMember = async (userId, updateData) => {
  const member = await Member.findOneAndUpdate(
    { userAccount: userId },
    updateData,
    { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
  );
  return member;
};

export const handleForeignStatus = async (req, res) => {
  try {
    const member = await createOrUpdateMember(req.body.userId, {
      isForeignPassportHolder: req.body.isForeignPassportHolder,
    });
    res.status(200).json({
      message: 'Foreign status recorded. Proceed to next step.',
      member,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleDetails = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      birthday,
      nationality,
      area,
      phone,
      wechatID,
    } = req.body;
    const member = await createOrUpdateMember(userId, {
      name,
      email,
      birthday,
      nationality,
      area,
      phone,
      wechatID,
    });
    res
      .status(200)
      .json({ message: 'Details recorded. Proceed to next step.', member });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleAvailability = async (req, res) => {
  try {
    const member = await createOrUpdateMember(req.body.userId, {
      worksOnWeekdays: req.body.worksOnWeekdays,
      hasChildren: req.body.hasChildren,
      childrenAgeGroup: req.body.childrenAgeGroup,
    });
    res.status(200).json({
      message: 'Availability data saved. Proceed to next step.',
      member,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleInterests = async (req, res) => {
  try {
    const member = await createOrUpdateMember(req.body.userId, {
      interestedActivities: req.body.interestedActivities,
    });
    res
      .status(200)
      .json({ message: 'Interests data saved. Proceed to next step.', member });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleLeadActivity = async (req, res) => {
  try {
    const member = await createOrUpdateMember(req.body.userId, {
      leadingActivitiesInterest: req.body.leadingActivitiesInterest,
    });
    res.status(200).json({
      message: 'Lead activity data saved. Proceed to next step.',
      member,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleLearnedAbout = async (req, res) => {
  try {
    const { userId, learnedAboutSWIC } = req.body;

    if (
      !learnedAboutSWIC ||
      !['Online search', 'Friends', 'WeChat', 'Facebook', 'Other'].includes(
        learnedAboutSWIC
      )
    ) {
      return res
        .status(400)
        .json({ message: 'Invalid value for learnedAboutSWIC.' });
    }

    const member = await createOrUpdateMember(userId, { learnedAboutSWIC });
    res.status(200).json({
      message: 'Information on how you learned about SWIC has been recorded.',
      member,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleFeedback = async (req, res) => {
  try {
    const member = await createOrUpdateMember(req.body.userId, {
      feedback: req.body.feedback,
    });
    res.status(200).json({
      message: 'Feedback recorded. Proceed to agree to terms and conditions.',
      member,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};

export const handleTerms = async (req, res) => {
  try {
    const { userId, acceptedTermsAndConditions } = req.body;
    const member = await createOrUpdateMember(userId, {
      acceptedTermsAndConditions,
    });
    if (!acceptedTermsAndConditions) {
      return res.status(400).json({ message: 'Terms must be accepted.' });
    }
    res
      .status(200)
      .json({ message: 'Terms accepted. Registration complete.', member });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error.' });
  }
};
