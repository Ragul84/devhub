import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Notess = mongoose.model('Note', noteSchema)
export default Notess
