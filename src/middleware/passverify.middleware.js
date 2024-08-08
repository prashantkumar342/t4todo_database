import bcrypt from 'bcrypt'
import { User as userModel } from '../models/user.model.js'

const verifyPassword = async (req, res, next) => {
  const password = req.body.password;
  const userId = req.userId;
  try {
    const user = await userModel.findById(userId)
    const hashPash = user.password;
    const verification = await bcrypt.compare(password, hashPash);
    if (!verification) {
      return res.status(401).json({ message: 'invalid credentials' })
    }
    next()
  } catch (error) {
    res.status(500).json({ message: 'error while verifying password' })
  }


}

export default verifyPassword