import AuthService from './authService/index.js'
import IUseCases from './layerInterface.js'
import { IAuthService } from './layerInterface.js'

class UseCases implements IUseCases {
  AuthService: IAuthService
  constructor() {
    this.AuthService = AuthService
  }
}

export default new UseCases()
