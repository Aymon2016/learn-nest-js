
import {Controller,Inject} from '@nestjs/common';
import { userStore } from './user.store';

@Controller('/users')
export class UserController {

    // constructor( private userStore:userStore){
    //     console.log(this.userStore);
    // }

        constructor(@Inject('database name') private dbname:String){
                console.log(this.dbname);
            }
}
