import express from 'express'
import {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} from '../Controllers/NotesController.js'

const router = express.Router()

router.route('/').get(getNotes)
router.route('/create').post(createNote) // Fixed the function name here
router.route('/:id').get(getNoteById).put(UpdateNote).delete(DeleteNote)

export default router
