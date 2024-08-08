import { User as userModel } from "../models/user.model.js"
import bcrypt from 'bcrypt'
const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await userModel.findOne({ $or: [{ username: username }, { email: email }] });
    if (user) {
      return res.status(409).json({ error: 'user already exists' });
    }
    const hashPass = await bcrypt.hash(password, 14);
    const newUser = new userModel({
      username: username, email: email, password: hashPass
    });
    await newUser.save();
    return res.status(200).json({ success: "user register successfuly" })
  }
  catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
}
export default register
