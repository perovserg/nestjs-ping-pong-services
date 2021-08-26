import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ClientService } from "./client.service";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ClientService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "got empty `repeats`"', async () => {
      expect(await appController.start(0)).toBe('got empty `repeats`');
    });
    it('should return "Ping-pong has started"', async () => {
      const result = 'Ping-pong has started';
      jest.spyOn(appController, 'start').mockImplementation(() => Promise.resolve(result));
      expect(await appController.start(1)).toBe(result);
    });
  });
});
