import Notess from '../server/model/NotesModel.js'
import asyncHandler from 'express-async-handler'

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Notess.find()
  res.json(notes)
})

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body
  if (!title || !content || !category) {
    res.status(400).json({ error: 'Please fill in all the fields' })
  } else {
    const note = new Notess({ title, content, category })
    const createdNote = await note.save()
    res.status(201).json(createdNote)
  }
})

const getNoteById = asyncHandler(async () => {
  const note = await Notess.findById(req.params.id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).json({ message: 'Note not found' })
  }
  res.json(note)
})

const UpdateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body
  const note = await Notess.findById(req.params.id)

  if (note) {
    note.title = title
    note.content = content
    note.category = category

    const updatedNote = await Notess.save()
    res.json(updatedNote)
  } else {
    res.status(404)
    throw new Error('Mote Not Found')
  }
})

const DeleteNote = asyncHandler(async (req, res) => {
  const note = await Notess.findById(req, params.id)
  if (note) {
    await note.remove()
    res.json({ message: 'Note Removed' })
  } else {
    res.status(404)
    throw new Error('Note not found')
  }
})

export { getNotes, createNote, getNoteById, UpdateNote , DeleteNote}
