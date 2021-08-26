import { Injectable } from '@nestjs/common';
import { IResponse } from "./app.types";
import { ClientService } from "./client.service";

@Injectable()
export class PongService {
  constructor(private clientService: ClientService) {}

  pong(repeats: number): IResponse {
    repeats--;
    const response: IResponse = {
      repeats,
      message: 'pong',
    }
    if (repeats)
      this.clientService.ping(repeats);

    return response;
  }
}
