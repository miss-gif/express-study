import { User } from "../models/users.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

export const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
