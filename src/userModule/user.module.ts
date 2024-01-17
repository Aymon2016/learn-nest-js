import { Module } from '@nestjs/common';
import { JobsService } from './user.Service';
import { userController } from './user.Controller';
import {AuthModule} from '../AuthModule/auth.Module'

@Module({
    imports:[AuthModule],
    controllers:[userController],
    providers:[JobsService],
    exports:[JobsService]
})
export class userModule {}