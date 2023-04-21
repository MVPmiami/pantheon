import Repository from '../../repository/index.js'
import { IAuthService } from '../layerInterface.js'
import uniqid from 'uniqid'

class AuthService implements IAuthService {
  signUp = async (login: string, password: string, email: string) => {
    const result = { value: null, error: null }

    const userResult = await Repository.db.users.findUser(email)

    if (userResult.value) {
      result.error = new Error('user already exist')
      return result
    }
    const { value, error } = await Repository.db.users.createUser(
      uniqid(email),
      login,
      password,
      email,
    )
    if (!value || error) {
      result.error = new Error('Error when creating a user')
      return result
    }
    result.value = true
    return result
  }
}

export default new AuthService()
