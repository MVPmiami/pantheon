import { IFuncResultModel } from '../../models/common/FuncResultModel.js'
import { IUser } from '../../models/users.js'

export default interface IDBRepository {
  connector: IDBConnector
  users: IUsersRepository
}

export interface IDBConnector {
  createConnection: () => Promise<void>
}

export interface IUsersRepository {
  createUser: (
    id: string,
    login: string,
    password: string,
    email: string,
  ) => Promise<IFuncResultModel<boolean | null>>
  findUser: (email: string) => Promise<IFuncResultModel<IUser | null>>
  deleteUser: (email: string) => Promise<IFuncResultModel<boolean | null>>
}
