import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PongController } from './pong.controller';
import { PongService } from './pong.service';
import { ClientService } from "./client.service";

@Module({
  imports: [],
  controllers: [AppController, PongController],
  providers: [PongService, ClientService],
})
export class AppModule {}
