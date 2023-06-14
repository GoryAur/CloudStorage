import path from 'path'
import { verifyToken } from '../utils/handleJwt.js'

export const getFiles = async (req, res) => {
  try {

    const token = req.token
    if (!req.headers.authorization) {
      res.set('Authorization', `Bearer ${token}`)
    }

    // if (!req.headers.authorization) {
    //   res.json("NOT TOKEN")
    // }

    // const token = req.headers.authorization.split(' ').pop()
    const dataToken = verifyToken(token)

    if (!dataToken.ip_address) {
      res.json("ERROR ID TOKEN")
      return
    }

    const options = {
      root: path.join(`${__dirname}/../storage`)
    }

    await res.sendFile(req.params.file, options)

  } catch (e) {
    res.json("ERROR GETTING FILE")
    console.log(e);
  }
}
