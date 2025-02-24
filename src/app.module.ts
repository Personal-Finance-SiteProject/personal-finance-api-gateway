import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from './common/guard/auth.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { AuthModule } from "./modules/auth/auth.module";


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: process.env.JWT_EXPIRES_IN},
        }),
        AuthModule
    ],
    controllers: [],
    providers: [
        { provide: APP_FILTER, useClass: HttpExceptionFilter },
        { provide: APP_GUARD, useClass: AuthGuard },
        { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },

    ],
})
export class AppModule { }
