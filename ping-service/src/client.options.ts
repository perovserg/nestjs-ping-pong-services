import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

const PONG_GRPC_SERVER_URL = process.env.PONG_GRPC_SERVER_URL || 'localhost:3006';

export const clientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: PONG_GRPC_SERVER_URL,
        package: 'pong',
        protoPath: join(__dirname, 'pong.proto'),
    }
};
