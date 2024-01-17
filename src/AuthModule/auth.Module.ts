
import { Module } from '@nestjs/common';
import { AuthService } from './auth.Service';
import { AuthController } from './auth.Controller';


@Module({
    controllers:[AuthController],
    providers:[AuthService],
    exports:[AuthService]
})
export class AuthModule {}