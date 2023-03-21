import User from '../../models/users.js'

class Users {
  createUser = async (user) => {
    const result = { value: null, error: null }

    await User.collection.insertOne(user, function (err, docs) {
      if (err) {
        result.error = err || new Error('Undefined repository error')
      } else {
        result.value = true
        console.log('user created')
      }
    })
    return result
  }
  findUser = async (email) => {
    const result = { value: null, error: null }

    try {
      const query = await User.where({ email: email })
      const user = await query.findOne()
      console.log('user was found')
      result.value = user
      return result
    } catch (error) {
      result.error =
        new Error('user not found') || new Error('Undefined repository error')
      return result
    }
  }
  deleteUser = async (email) => {
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
