import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3001
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors({
    origin: [process.env.FRONTEND_URL],
  });
  const config = new DocumentBuilder()
      .setTitle('ByteFrost - Personal Finance API')
      .setDescription('API para el servicio de la aplicación')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(port);
  console.log(`✅: Servicio API Gateway corriendo en el puerto: ${port}`)
}
bootstrap();

