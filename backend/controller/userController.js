const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const Notes = require('../models/notesModel')
const generateToken = require('../lib/generateToken.js')

// @desc login user
// @route POST api/user/login
// @Access Public

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findone({ email: email })
  if (user && (await user.metchPassword(password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    })
  } else {
    res.status(404)
    throw new Error('invalid credientials')
  }
})

// @desc register user
// @route POST api/user/singin
// @Access Public

const singInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const userExist = await User.findOne({ email })
  if (userExist) {
    throw new Error('user alrady exist')
  }

  try {
    const user = await User.create({ email, password })
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    })
  } catch (error) {
    throw new Error('server side error')
  }
})

// @route DELETE api/user/
// @desc login user
// @Access Private

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    await user.remove()
    const notes = await Notes.deleteMany({ user: req.user.id })
    res.json({ message: 'user removed' })
  } catch (error) {
    throw new Error('user not found')
  }
})
