import { USERS } from '../mockdata/users'

export class UserService {
    constructor() {

    }
    public findAll(): Array<any> {
        return USERS;
    }
}