import { NestFactory, Reflector } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './interceptors/response/response.interceptor';
import { application } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const reflector: Reflector = new Reflector();
  app.useGlobalInterceptors(new ResponseInterceptor(reflector));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
