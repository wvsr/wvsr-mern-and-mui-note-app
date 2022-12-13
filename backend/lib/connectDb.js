const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('', {})
    console.log('mongoose connected')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
