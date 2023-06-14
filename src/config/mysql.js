const mysql = require('mysql2/promise');
import { config } from 'dotenv'
config()

export const pool =
  mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  })
