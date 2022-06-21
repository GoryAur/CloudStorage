const ipModel = require('../models/ipUsers');
const { tokenSign } = require('../utils/handleJwt');
const pool = require('../config/mysql');

const signIp = async (req, res, next) => {
  try {

    const ip = await req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(':').pop();

    // const [rows, fields] = await pool.query('SELECT * FROM ci_sessions WHERE id = ?;', [ci_session])

    const [rows, fields] = await pool.query('SELECT * FROM ci_sessions WHERE ip_address = ?;', [ip])

    if (!rows) {
      res.json("ERROR REQUEST")
      return
    }

    const data = {
      token: tokenSign(rows[rows.length - 1]),
      ip: rows[rows.length - 1]
    }
    console.log(data)
    // const dataIp = await ipModel.findOne({ ip })

    // const data = {
    //   token: tokenSign(dataIp),
    //   ip: dataIp
    // }    

    // if (!dataIp) {
    //   await ipModel.create({ ip })

    // }

    req.token = data.token;

    next()

  } catch (e) {
    res.json("ERROR REQUEST")
    console.log(e);
  }
}

module.exports = signIp