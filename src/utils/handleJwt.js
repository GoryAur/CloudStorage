const jwt = require('jsonwebtoken');

const JWT_SECRET = 'gorila'

const tokenSign = (file) => {
  try {
    const sign = jwt.sign(
      {
        ip_address: file.ip_address
      },
      JWT_SECRET,
      {
        expiresIn: '15m'
      }
    )
    return sign
  } catch (e) {
    console.log(e);
  }
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  tokenSign,
  verifyToken
}