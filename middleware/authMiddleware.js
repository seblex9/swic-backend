import jwt from 'jsonwebtoken';
import Member from '../models/memberModel.js';

const authenticate = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized, no token.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.member = await Member.findById(decoded.id);

    if (!req.member) {
      return res.status(404).json({ error: 'No member found with this ID.' });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: 'Server Error.' });
  }
};

export default authenticate;
