import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ClientService } from "./client.service";

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private clientService: ClientService) {}

  @Post('start')
  async start(@Body('repeats') repeats: number) {
    this.logger.log(`Ping starts with repeats: ${repeats}`);
    if (repeats) {
      this.clientService.pong(repeats);
      return 'Ping-pong has started';
    }
    return 'got empty `repeats`';
  }
}
