const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWR_SECRET_KEY, {
    expiresIn: '30d',
  })
}
