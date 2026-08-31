import { INestApplication } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import type { App } from 'supertest/types';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('AuthController', () => {
  let app: INestApplication<App>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'test-jwt-secret-that-is-long-enough-for-validation',
        }),
      ],
      controllers: [AuthController],
      providers: [
        JwtAuthGuard,
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
    jwtService = module.get(JwtService);
  });

  afterEach(async () => {
    await app.close();
  });

  it('returns the authenticated user from GET /api/auth/me', async () => {
    const accessToken = await jwtService.signAsync({
      id: 'user-id',
      email: 'user@example.com',
      type: 'access',
    });

    await request(app.getHttpServer())
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect({
        id: 'user-id',
        email: 'user@example.com',
      });
  });

  it('rejects an unauthenticated GET /api/auth/me request', async () => {
    await request(app.getHttpServer()).get('/api/auth/me').expect(401);
  });
});
