const pool = require('../config/mysql');

const getUsers = async (req, res) => {
  const data = pool.query('SELECT * FROM user;', (err, result) => {
    if (err) throw err
    res.json(result)
  })
}

module.exports = getUsers