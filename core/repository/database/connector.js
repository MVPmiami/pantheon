import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: __dirname + '../../../env/.env' })

class DBConnector {
  connection

  createConnection = async () => {
    this.connection = await mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        console.log('connected to db')
      })
  }
}

export default new DBConnector()
