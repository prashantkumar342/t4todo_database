import jwt from 'jsonwebtoken';
import { User as userModel } from '../models/user.model.js';
import { Token as tokenModel } from '../models/token.model.js';

const authentication = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) return res.status(401).json({ message: 'Refresh token missing' });
  try {
    const decode = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY);
    const tokenExists = await tokenModel.findOne({ user: decode._id })
    res.status(200)
    req.tokenId = tokenExists;
    req.userId = decode._id;
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    } else {
      console.error('Refresh token verification error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
export default authentication