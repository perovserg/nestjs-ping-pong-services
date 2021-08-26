import { Injectable } from '@nestjs/common';
import { IResponse } from "./app.types";
import { ClientService } from "./client.service";

@Injectable()
export class PingService {
  constructor(private clientService: ClientService) {}

  ping(repeats: number): IResponse {
    repeats--;
    const response: IResponse = {
      repeats,
      message: 'ping',
    }
    if (repeats)
      this.clientService.pong(repeats);

    return response;
  }
}
