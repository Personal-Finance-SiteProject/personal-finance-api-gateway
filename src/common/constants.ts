
export function RabbitMQ() {
    return {
        url: process.env.AMQP_URL,
        AuthQueue: process.env.MQ_AUTH_QUEUE,
    };
}
