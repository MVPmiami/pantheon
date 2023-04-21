import DBConnector from './connector.js'
import Users from './users.js'
import { IDBConnector } from './interfaces.js'
import { IUsersRepository } from './interfaces.js'
import IDBRepository from './interfaces.js'

class DB implements IDBRepository {
  connector: IDBConnector
  users: IUsersRepository
  constructor() {
    this.connector = DBConnector
    this.users = Users
  }
}

export default new DB()
