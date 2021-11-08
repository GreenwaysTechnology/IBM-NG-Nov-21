import { log } from './util/logger';
import {UserService} from './services/user.service';



let userService = new UserService();
log('user service : fetch')
console.log(userService.findAll());