import { Controller, Logger } from '@nestjs/common';
import { PingService } from './ping.service';
import { GrpcMethod } from "@nestjs/microservices";
import { IRepeats, IResponse } from "./app.types";

@Controller()
export class PingController {
  private logger = new Logger('PingController');
  constructor(private readonly pingService: PingService) {}

  @GrpcMethod('PingController', 'Ping')
  ping(data: IRepeats): IResponse {
    const { repeats } = data;
    this.logger.log(`Called ping server with repeats: ${repeats}`);
    return this.pingService.ping(repeats);
  }
}
