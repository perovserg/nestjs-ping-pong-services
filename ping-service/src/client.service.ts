import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { clientOptions } from "./client.options";
import { IPongService, IResponse } from "./app.types";

@Injectable()
export class ClientService implements OnModuleInit {
    private logger = new Logger('ClientService');

    @Client(clientOptions)
    client: ClientGrpc;

    private pongService: IPongService;

    onModuleInit() {
        this.pongService = this.client.getService<IPongService>('PongController');
    }

    pong(repeats: number) {
        this.pongService.pong({ repeats }).subscribe((response: IResponse) => {
            this.logger.log(`Response from pong... repeats: ${response.repeats}, message: ${response.message}`);
        });
    }
}
