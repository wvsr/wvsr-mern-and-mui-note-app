const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
})

const notesModel = mongoose.model('notes', notesSchema)

module.exports = notesModel
