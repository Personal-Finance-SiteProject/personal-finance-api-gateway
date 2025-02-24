import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

// TODO: HttpExceptionFilter es un manejador global de errores que captura excepciones y devuelve respuestas en un formato estándar en toda el API.

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const { error } = exception;
        const status =
            error?.code ||
            (typeof exception?.status === 'number' ? exception?.status : null) ||
            400;
        console.log('error', exception, status);
        response.status(status).json({
            statusCode: status,
            type: error?.type || null,
            message: error?.message || exception.message,
            data: error?.data || null,
        });
    }
}
