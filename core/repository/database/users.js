import User from '../../models/users.js'

class Users {
  createUser = async (user) => {
    User.collection.insertOne(user, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        console.log('insert one')
      }
    })
  }
  findUser = async (email) => {
    const query = User.where({ email: email })
    const user = await query.findOne()
    console.log(user)
  }
  deleteUser = async (email) => {
    await User.deleteOne({ email: email })
    console.log('user was deleted')
  }
}

export default new Users()
