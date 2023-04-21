import { IFuncResultModel } from './../models/common/FuncResultModel.js'

export default interface IUseCases {
  AuthService: IAuthService
}

export interface IAuthService {
  signUp: (
    id: string,
    login: string,
    password: string,
    email: string,
  ) => Promise<IFuncResultModel<boolean | null>>
}
