// DEPENDENCIES
const express = require('express')
//const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE


// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// 404 Page
app.get('*', (req, res) => {
  res.send('Error 404')
})

/* mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
) */

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})