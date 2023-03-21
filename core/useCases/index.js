import AuthService from './AuthService/index.js'

class UseCases {
  AuthService
  constructor() {
    this.AuthService = AuthService
  }
}

export default new UseCases()
