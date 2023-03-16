import mysql from 'mysql2/promise'
import dayjs from 'dayjs'
import dotenv from 'dotenv';
dotenv.config();

const connect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT)
    });
    const time = dayjs().format('HH:MM:ss')

    console.log(`[INFO] ${time} Connect with DB ${process.env.DB_DATABASE}`)
    
    return connection
  } catch (err: any) {
    console.log(err)
  }
}

export default connect

