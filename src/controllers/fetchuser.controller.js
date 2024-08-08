import { User as userModel } from "../models/user.model.js";
const fetchUser = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).json({ message: 'server error while fetching user details' })
  }
}

export default fetchUser