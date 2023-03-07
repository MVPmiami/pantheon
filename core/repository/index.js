import DB from '../repository/database/index.js'

class Repository {
  db
  constructor() {
    this.db = DB
  }

  connect = async () => {
    await this.db.connector.createConnection()
  }
}
export default new Repository()
