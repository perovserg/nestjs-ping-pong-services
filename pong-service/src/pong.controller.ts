import { Controller, Logger } from '@nestjs/common';
import { PongService } from './pong.service';
import { GrpcMethod } from "@nestjs/microservices";
import { IRepeats, IResponse } from "./app.types";

@Controller()
export class PongController {
  private logger = new Logger('PongController');
  constructor(private readonly pongService: PongService) {}

  @GrpcMethod('PongController', 'Pong')
  ping(data: IRepeats): IResponse {
    const { repeats } = data;
    this.logger.log(`Called pong server with repeats: ${repeats}`);
    return this.pongService.pong(repeats);
  }
}
