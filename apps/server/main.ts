import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

(async function main() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 8080;
  app.enableCors();
  await app.listen(port);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  console.log(`Application running on Port: ${port}`);
})();
