import { Router } from 'express'
import { getFiles } from '../controllers'
import { signIp } from '../middleware/signIp.js'
import { streaming } from '../controllers/stream.js'

export const router = Router()

router.get('/:file', signIp, getFiles)
// router.get('/video/:file', streaming)
