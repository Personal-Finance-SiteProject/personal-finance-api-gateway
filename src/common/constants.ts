// Define una interfaz para el tipo de retorno
interface RabbitMQConfig {
    url: string;
    AuthQueue: string;
}

// Añade valores por defecto y tipo de retorno
export function RabbitMQ(): RabbitMQConfig {
    const config = {
        url: process.env.AMQP_URL || 'amqp://localhost', // Valor por defecto
        AuthQueue: process.env.MQ_AUTH_QUEUE || 'MS-AUTH-pf-dev' // Valor por defecto
    };

    // Verificación adicional para desarrollo
    if (!process.env.MQ_AUTH_QUEUE) {
        console.warn("⚠️ Advertencia: MQ_AUTH_QUEUE no está definido en .env");
    }

    return config;
}

// export function RabbitMQ() {
//     return {
//         url: process.env.AMQP_URL,
//         AuthQueue: process.env.MQ_AUTH_QUEUE,
//     };
// }

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
