import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import { join } from "path";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

const API_PORT = process.env.API_PORT || '3005';
const PONG_GRPC_SERVER_URL = process.env.PONG_GRPC_SERVER_URL || 'localhost:3006';
const logger = new Logger('Main');

async function bootstrap() {
    const server = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: PONG_GRPC_SERVER_URL,
            package: 'pong',
            protoPath: join(__dirname, 'pong.proto'),
        },
    });
    await server.listen();
    logger.log('Pong gRPC-server is listening...');
    const httpClient = await NestFactory.create(AppModule);
    await httpClient.listen(API_PORT);
    logger.log(`Pong http-client is listening on port: ${API_PORT}`);
}
bootstrap();
