const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.methods.metchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.pre('save', async (next) => {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)

  this.password = hash
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
