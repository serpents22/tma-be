const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv/config')
app.use(cors())
app.use(bodyParser.json())



//Import Route
const postsRoute = require('./routes/performance')
app.use('/performance', postsRoute)

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true, useUnifiedTopology: true}, () => 
  console.log('connected to DB'))

//Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Listening Server
const port = 3000
app.listen(port, () => {
  console.log(`TMA app listening on port http://localhost:${port}`)
})

