const express = require('express')
const app = express()
const index = require('./routes/index')
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongooseCrud', { useNewUrlParser: true, useFindAndModify : false })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', index)

app.listen(port, () => {
  console.log(`Listen in port ${port}`)
})