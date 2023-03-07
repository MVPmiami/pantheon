import express from 'express'
import * as dotenv from 'dotenv'
import Repository from '../core/repository/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: __dirname + '/env/.env' })
const app = express()
/*async function connect() {
  try {
    await mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((result) => {
        console.log('connected to db')
        let user = {
          id: uuidv4(),
          login: 'qwerty',
          password: 'qwerty1',
          email: 'qwerty@tut.by',
          testData: {
            health: 100,
            cash: 1500,
            status: 'online',
            abilities: ['1', '2', '3'],
          },
        }
        const userSchema = new mongoose.Schema({
          id: {
            type: String,
            required: true,
          },
          login: {
            type: String,
            required: true,
          },
          password: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
        })
        User.collection.insertOne(user, function (err, docs) {
          if (err) {
            console.log(err)
          } else {
            console.log('insert one')
          }
        })
      })
  } catch (error) {
    console.log(error)
  }
}
connect()*/

async function main() {
  await Repository.connect()
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
  })
}

main()
