import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'
import DetailsModel from './model/Details.js'

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://devhub:devhub@devhub.p2zrigw.mongodb.net/Details'
)

app.post("/login", (req, res) => {
  const { mail, password } = req.body;
  DetailsModel.findOne({ mail: mail })
    .then((user) => {
      if (user) {
        if (user.password === password) {
      res.json("Success")
      } else {
        res.send("The Password is Incorrect")
    }
      } else {
        res.json ("Account Not Found , Create New Account")
     }
  })
})

app.post('/register', (req, res) => {
  DetailsModel.create(req.body)
    .then((details) => res.json(details))
    .catch((err) => console.log(err))
})




app.listen(3001, () => {
  console.log('server is running')
})
