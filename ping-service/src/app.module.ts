import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';
import { ClientService } from "./client.service";

@Module({
  imports: [],
  controllers: [AppController, PingController],
  providers: [PingService, ClientService],
})
export class AppModule {}
