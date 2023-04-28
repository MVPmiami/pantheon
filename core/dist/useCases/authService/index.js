var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Repository from '../../repository/index.js';
import uniqid from 'uniqid';
class AuthService {
    constructor() {
        this.signUp = (login, password, email) => __awaiter(this, void 0, void 0, function* () {
            const result = { value: null, error: null };
            /*const userResult = await Repository.db.users.findUser(email)
        
            if (userResult.value) {
              result.error = new Error('user already exist')
              return result
            }*/
            const { value, error } = yield Repository.db.users.createUser(uniqid(email), login, password, email);
            if (!value || error) {
                result.error = new Error('Error when creating a user');
                return result;
            }
            result.value = true;
            return result;
        });
    }
}
export default new AuthService();
