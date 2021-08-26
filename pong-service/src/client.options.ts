import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

const PING_GRPC_SERVER_URL = process.env.PING_GRPC_SERVER_URL || 'localhost:3008';

export const clientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: PING_GRPC_SERVER_URL,
        package: 'ping',
        protoPath: join(__dirname, 'ping.proto'),
    }
};
