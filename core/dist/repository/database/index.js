import DBConnector from './connector.js';
import Users from './users.js';
class DB {
    constructor() {
        this.connector = DBConnector;
        this.users = Users;
    }
}
export default new DB();
