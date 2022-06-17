const { Router } = require('express');
const getFiles = require('../controllers');
const signIp = require('../middleware/signIp');
const streaming = require('../controllers/stream');

const router = Router()

router.get('/:file', signIp, getFiles)
// router.get('/video/:file', streaming)

module.exports = router