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

    // clientProxyConfig(queue): ClientProxy {
    //     console.log(this.rabbitMQConfig.url, queue, 'Configurando cliente proxy...');
    //     return ClientProxyFactory.create({
    //         transport: Transport.RMQ,
    //         options: {
    //             // urls: [this.rabbitMQConfig.url],
    //             urls: ['amqps://pzccsvfn:JhaXLkL0xShcS_q3XCEjM8uDGjTqgPrI@possum.lmq.cloudamqp.com/pzccsvfn'],
    //             queue,
    //         },
    //     })
    // }

    clientProxyConfig(queue: string): ClientProxy {
        console.log('📡 Configurando Cliente Proxy...');
        console.log('➡️ URL:', this.rabbitMQConfig.url);
        console.log('➡️ Cola:', queue); // ¡Asegúrate de usar el parámetro!

        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [this.rabbitMQConfig.url], // Usa la variable de entorno
                queue: queue, // Cola dinámica según el parámetro
            },
        });
    }


}
