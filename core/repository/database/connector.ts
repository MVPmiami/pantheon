import mongoose from 'mongoose'
import { ConnectOptions } from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'
import { IDBConnector } from './interfaces.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '..', '..', '..', 'env', '.env') })
class DBConnector implements IDBConnector {
  connection: any | undefined

  createConnection = async () => {
    this.connection = await mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then((result) => {
        console.log('connected to db')
      })
  }
}

export default new DBConnector()
