import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/index.routes.js'
import { wss } from './controllers/remoteUpload.js'
import { mongoConnect } from './config/mongodb.js'
import { config } from 'dotenv'
config()

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
