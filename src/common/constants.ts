// interface RabbitMQConfig {
//     url: string;
//     AuthQueue: string;
// }
//
// interface RabbitMQConfig {
//     url: string;
//     AuthQueue: string;
// }
//
// export function RabbitMQ(): RabbitMQConfig {
//     return {
//         url: process.env.AMQP_URL || "amqp://localhost:5672",
//         AuthQueue: process.env.MQ_AUTH_QUEUE || "auth_queue",
//     };
// }

export function RabbitMQ() {
    return {
        url: process.env.AMQP_URL,
        AuthQueue: process.env.MQ_AUTH_QUEUE,
    };
}

// constants.ts
// export function RabbitMQ() {
//     const config = {
//         url: process.env.AMQP_URL,
//         AuthQueue: process.env.MQ_AUTH_QUEUE,
//     };
//
//     // ¡Verifica si las variables se están leyendo!
//     console.log('RabbitMQ Config:', config);
//
//     return config;
// }
