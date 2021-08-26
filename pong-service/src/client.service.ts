import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { clientOptions } from "./client.options";
import { IPingService, IResponse } from "./app.types";

@Injectable()
export class ClientService implements OnModuleInit {
    private logger = new Logger('ClientService');

    @Client(clientOptions)
    client: ClientGrpc;

    private pingService: IPingService;

    onModuleInit() {
        this.pingService = this.client.getService<IPingService>('PingController');
    }

    ping(repeats: number) {
        this.pingService.ping({ repeats }).subscribe((response: IResponse) => {
            this.logger.log(`Response from ping... repeats: ${response.repeats}, message: ${response.message}`);
        });
    }
}
