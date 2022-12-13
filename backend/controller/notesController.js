const asyncHandler = require('express-async-handler')
const Notes = require('../models/notesModel')

// @route POST api/notes/
// @desc create note
// @Access Private

const addNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body

  try {
    const note = await Notes.create({ content, title })
    res.json(note)
  } catch {
    throw new Error('server side error')
  }
})

// @route GET api/notes/
// @desc get notes
// @Access Private

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find({ user: req.user.id })

  if (notes) {
    res.json(notes)
  } else {
    res.status(404)
    throw new Error('No notes found')
  }
})

// @desc update note
// @route PUT api/notes/:id
// @Access Private

const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body
  const note = await Notes.findById(id)
  if (note) {
    note.title = title || note.title
    note.content = content || note.content

    await note.save()
  } else {
    res.status(404)
    throw new Error('not notes found currosponding this id')
  }
})

// @desc delete note
// @route DELETE api/notes/:id
// @Access Private

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params
  const note = await Notes.findById(id)
  if (note) {
    await note.remove()
    res.json({ message: 'note deleted' })
  } else {
    throw new Error('note not found')
  }
})
