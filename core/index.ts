import express from 'express'
import * as dotenv from 'dotenv'
import Repository from './repository/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', 'env', '.env') })
const app = express()

async function main() {
  await Repository.connect()
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost: ${process.env.PORT}`)
  })
}

main()
