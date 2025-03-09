import { Injectable } from '@nestjs/common';
import {
    ClientProxy,
    ClientProxyFactory,
    Transport,
} from '@nestjs/microservices';
import { RabbitMQ } from './constants';

@Injectable()
export class ProxyProvider {

    rabbitMQConfig: any;
    constructor() {
        this.rabbitMQConfig = RabbitMQ();
    }


    clientProxyConfig(queue): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [this.rabbitMQConfig.url],
                queue: queue,
            },
        });
    }


}
