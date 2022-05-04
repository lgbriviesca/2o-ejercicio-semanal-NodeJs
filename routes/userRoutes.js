const express = require('express');
const { body } = require('express-validator');
const { userExists } = require('../middlewares/usersMiddleware');

const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, createUser);

router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = { usersRouter: router };
