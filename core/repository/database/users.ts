import User from '../../models/users.js'
import { IUsersRepository } from './interfaces.js'

class Users implements IUsersRepository {
  createUser = async (
    id: string,
    login: string,
    password: string,
    email: string,
  ) => {
    const result = { value: null, error: null }
    const answer = await User.collection.insertOne({
      id,
      login,
      password,
      email,
    })
    if (!answer.acknowledged) {
      result.error =
        new Error('undefined error in db') ||
        new Error('Undefined repository error')
      return result
    }
    result.value = answer
    return result
  }
  findUser = async (email: any) => {
    const result = { value: null, error: null }
    try {
      const query = await User.find({ email: email })
      if (!query.length) {
        result.error =
          new Error('user not found') || new Error('Undefined repository error')
        return result
      }
      result.value = query
      return result
    } catch (error) {
      result.error =
        new Error('user not found') || new Error('Undefined repository error')
      return result
    }
  }
  deleteUser = async (email: string) => {
    const result = { value: null, error: null }
    try {
      await User.deleteOne({ email: email })
      result.value = true
      console.log('user was deleted')
      return result
    } catch (error) {
      result.error =
        new Error('User has not been deleted') ||
        new Error('Undefined repository error')
      return result
    }
  }
}

export default new Users()
