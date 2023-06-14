import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

const secret = process.env.SECRET

const JWT_SECRET = secret

export const tokenSign = (file) => {
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

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (e) {
    console.log(e);
  }
}
