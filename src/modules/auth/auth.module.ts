import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ProxyProvider } from '../../common/proxy.provider';


@Module({
    providers: [ProxyProvider],
    controllers: [AuthController]
})

export class AuthModule { }
