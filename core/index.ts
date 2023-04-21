import app from './delivery/index.js'
import Repository from './repository/index.js'

import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', 'env', '.env') })

async function main() {
  await Repository.connect()
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost: ${process.env.PORT}`)
  })
}

main()
