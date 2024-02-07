import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'
import DetailsModel from './model/Details.js'

import dotenv from 'dotenv'
import noteRoutes from "./noteRoutes.js"
import Notess from './model/NotesModel.js'
dotenv.config()

app.use(express.json())
app.use(cors())

// Connect to user login details database
mongoose.connect('mongodb+srv://devhub:devhub@devhub.p2zrigw.mongodb.net/Details', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('MongoDB connected successfully for user login details');
  })
  .catch((error) => {
    console.error('MongoDB connection failed for user login details:', error);
  });

// Connect to post details database
mongoose.connect('mongodb+srv://devhub:devhub@devhub.p2zrigw.mongodb.net/notes', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('MongoDB connected successfully for post details');
  })
  .catch((error) => {
    console.error('MongoDB connection failed for post details:', error);
  });

app.get('/', (req, res) => {
  res.send('k ')
})

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Notess.find(); 
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/notes/:id', (req, res) => {
  const note = Notess.find((n) => n._id === req.params.id)
  res.send(note)
})

app.post('/login', (req, res) => {
  const { mail, password } = req.body
  DetailsModel.findOne({ mail: mail }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success')
      } else {
        res.send('The Password is Incorrect')
      }
    } else {
      res.json('Account Not Found , Create New Account')
    }
  })
})

app.post('/register', (req, res) => {
  DetailsModel.create(req.body)
    .then((details) => res.json(details))
    .catch((err) => console.log(err))
})

app.post('/api/notes', (req, res) => {
  console.log('Received POST request to /api/notes');
  
  Notess.create(req.body)
    .then((note) => {
      console.log('Note created:', note);
      res.json(note);
    })
    .catch((err) => {
      console.error('Error creating note:', err);
      res.status(500).json({ error: err.message });
    });
});

//{app.use("/api/notes", noteRoutes);}

const PORT = process.env.port || 1234

app.listen(PORT, () => {
  console.log('server is running')
})
