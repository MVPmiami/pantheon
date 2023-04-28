import AuthService from './authService/index.js';
class UseCases {
    constructor() {
        this.AuthService = AuthService;
    }
}
export default new UseCases();
