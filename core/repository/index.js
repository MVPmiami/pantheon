import DB from '../repository/database/index.js'
import Users from '../repository/database/users.js'

class Repository {
  db
  users
  constructor() {
    this.db = DB
    this.users = Users
  }

  connect = async () => {
    await this.db.connector.createConnection()
  }
}
export default new Repository()
