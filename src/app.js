const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index.routes');
const wss = require('./controllers/remoteUpload');
const mongoConnect = require('./config/mongodb');
require('dotenv').config();

const port = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
