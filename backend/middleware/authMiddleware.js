const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
      const user = User.findOne(decode.id).select('-password')
      req.user = user
    } catch (e) {
      res.status(400)
      throw new Eror('invalid token')
    }
  }
  if (!token) {
    throw new Eror('no toke found')
  }
})

module.exports = { protect }
