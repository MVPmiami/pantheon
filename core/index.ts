import express from 'express'
import * as dotenv from 'dotenv'
import Repository from './repository/index.js'
import UseCases from './useCases/index.js'
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
  /*let user = {
    id: '2222',
    login: 'login2',
    password: 'password2',
    email: 'email22@tut.by',
  }
  //const result = await Repository.db.users.deleteUser(user.email)
  const result = await UseCases.AuthService.signUp(
    user.id,
    user.login,
    user.password,
    user.email,
  )
  console.log(result)*/
}

main()
