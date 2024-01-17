

import {Controller} from '@nestjs/common'
import { AuthService } from './auth.Service'


@Controller()
export class AuthController {

    constructor(private readonly AuthService: AuthService) {

        console.log(AuthService)
    }
}