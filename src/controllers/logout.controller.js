import { Token as tokenModel } from '../models/token.model.js'
import jwt from 'jsonwebtoken'
const logout = async (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    path: '/'
  })
  await tokenModel.findByIdAndDelete(req.tokenId._id)
  res.status(200).json({ message: "succefully logged out" })
}
export default logout