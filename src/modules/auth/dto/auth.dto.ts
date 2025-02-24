import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignInDto {
    @ApiProperty({ description: 'Nombre de usuario', required: true })
    @IsNotEmpty({ message: 'El nombre de usuario es requerido' })
    username: string;
    @ApiProperty({ description: 'Contraseña de usuario', required: true })
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    password: string;
}


export class AuthResetDto {
    @ApiProperty({ description: 'Email de usuario', required: true })
    @IsEmail({}, { message: 'El email no es válido' })
    email: string;
}
