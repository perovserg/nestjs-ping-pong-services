import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

const API_PORT = process.env.API_PORT || '3007';
const PING_GRPC_SERVER_URL = process.env.PING_GRPC_SERVER_URL || 'localhost:3008';
const logger = new Logger('Main');

async function bootstrap() {
  const server = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: PING_GRPC_SERVER_URL,
      package: 'ping',
      protoPath: join(__dirname, 'ping.proto'),
    },
  });
  await server.listen();
  logger.log('Ping gRPC-server is listening...');
  const httpClient = await NestFactory.create(AppModule);
  await httpClient.listen(API_PORT);
  logger.log(`Ping http-client is listening on port: ${API_PORT}`);
}
bootstrap();
