
import {Injectable} from '@nestjs/common'


@Injectable()
export class AuthService {
    constructor() {
        
    }
    get(){
        return 'Auth Service';
    }
}