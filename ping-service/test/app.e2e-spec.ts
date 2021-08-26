import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/start (POST)', () => {
    const body = { repeats: 0 };
    return request(app.getHttpServer())
      .post('/start')
      .send(body)
      .expect(201)
      .expect('got empty `repeats`');
  });
});
