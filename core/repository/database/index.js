import DBConnector from '../database/connector.js'

class DB {
  connector
  constructor() {
    this.connector = DBConnector
  }
}

export default new DB()
