import DB from './database/index.js'
import IDBRepository from './database/interfaces.js'

class Repository {
  db: IDBRepository
  constructor() {
    this.db = DB
  }

  connect = async () => {
    await this.db.connector.createConnection()
  }
}
export default new Repository()
