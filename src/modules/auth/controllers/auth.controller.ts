import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { RabbitMQ } from '../../../common/constants';
import { Public } from '../../../common/decorators/metadata.decorator';
import { actionsSignIn } from '../common/constants'
import { ProxyProvider } from '../../../common/proxy.provider';
import { AuthSignInDto } from "../dto/auth.dto";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    private _clientProxy: ClientProxy;


    constructor(
        private readonly authProxyProvider: ProxyProvider
    ) {
        this._clientProxy = this.authProxyProvider.clientProxyConfig(
            RabbitMQ().AuthQueue
        );
    }


    @Public()
    @Post('sign-in')
    async signIn(@Body() data: AuthSignInDto) {
        try {
            return this._clientProxy.send(actionsSignIn.SIGN_IN, data);
        } catch (e) {
            throw new Error(e);
        }
    }
}
