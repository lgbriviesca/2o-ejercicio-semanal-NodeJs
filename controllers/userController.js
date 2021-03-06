const { User } = require('../models/userModel');

const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();

  res.status(200).json({ users });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const newUser = await User.create({ name, email, password, role });

  res.status(201).json({ newUser });
});

const getUserById = catchAsync(async (req, res) => {
  const { user } = req;

  res.status(200).json({ user });
});

const updateUser = catchAsync(async (req, res) => {
  const { user } = req;

  const { name, email } = req.body;

  await user.update({ name, email });

  res.status(200).json({ status: 'success' });
});

const deleteUser = catchAsync(async (req, res) => {
  const { user } = req;

  await user.update({ status: 'unavailable' });

  res.status(200).json({ status: 'success' });
});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
