import { User as userModel } from "../models/user.model.js";
const edituser = async (req, res) => {
  const userId = req.userId
  try {
    const updates = { username: req.body.username, email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname };
    const options = { new: true, runValidators: true, context: 'query' };
    const updatesExists = await userModel.findOne({
      $or: [
        { username: updates.username },
        { email: updates.email }
      ]
    })
    if (!updatesExists) {
      await userModel.findOneAndUpdate(
        { _id: userId },
        updates,
        options
      );
      return res.status(201).json({ message: 'user updated' });
    }
    if (updatesExists._id == userId) {
      await userModel.findOneAndUpdate(
        { _id: userId },
        updates,
        options
      );
    } else {
      return res.status(409).json({ message: 'user may already exists' })
    }

    res.status(201).json({ message: 'user updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default edituser