var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../../models/users.js';
class Users {
    constructor() {
        this.createUser = (id, login, password, email) => __awaiter(this, void 0, void 0, function* () {
            const result = { value: null, error: null };
            const answer = yield User.collection.insertOne({
                id,
                login,
                password,
                email,
            });
            if (!answer.acknowledged) {
                result.error =
                    new Error('undefined error in db') ||
                        new Error('Undefined repository error');
                return result;
            }
            result.value = answer;
            return result;
        });
        this.findUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const result = { value: null, error: null };
            try {
                const query = yield User.find({ email: email });
                if (!query.length) {
                    result.error =
                        new Error('user not found') || new Error('Undefined repository error');
                    return result;
                }
                result.value = query;
                return result;
            }
            catch (error) {
                result.error =
                    new Error('user not found') || new Error('Undefined repository error');
                return result;
            }
        });
        this.deleteUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const result = { value: null, error: null };
            try {
                yield User.deleteOne({ email: email });
                result.value = true;
                console.log('user was deleted');
                return result;
            }
            catch (error) {
                result.error =
                    new Error('User has not been deleted') ||
                        new Error('Undefined repository error');
                return result;
            }
        });
    }
}
export default new Users();
