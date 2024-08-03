import { User as userModel } from '../models/user.model.js';
import { Token as tokenModel } from '../models/token.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import e from 'express';

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const user = await userModel.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const plainPass = await bcrypt.compare(password, user.password)
    if (!plainPass) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // const accessToken = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: '1d' });
    const refreshToken = await jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: '10d' });
    const existingToken = await tokenModel.findOne({ user: user._id })
    if (!existingToken) {
      const token = new tokenModel({
        user: user._id,
        refreshToken: refreshToken
      });
      await token.save();
      return res.status(200).cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 864000000
      }).json({ success: 'successfull loggedIn' })
    }
    existingToken.refreshToken = refreshToken;
    await existingToken.save();
    res.status(200).cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 864000000
    }).json({ success: 'successfull loggedIn' })
  }
  catch (error) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

export default login