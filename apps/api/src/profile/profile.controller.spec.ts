import { INestApplication } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import type { App } from 'supertest/types';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { ProfileDetailsController } from './profile-details.controller';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

describe('Profile controllers', () => {
  let app: INestApplication<App>;
  let jwtService: JwtService;
  const prisma = {
    profile: {
      create: jest.fn(),
      delete: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'test-jwt-secret-that-is-long-enough-for-validation',
        }),
      ],
      controllers: [ProfileController, ProfileDetailsController],
      providers: [
        JwtAuthGuard,
        ProfileService,
        {
          provide: PrismaService,
          useValue: prisma,
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

  it('allows an owner to retrieve a profile', async () => {
    prisma.profile.findUnique.mockResolvedValue({
      id: 'profile-id',
      name: 'Frontend resume',
      userId: 'user-id',
    });
    const accessToken = await jwtService.signAsync({
      id: 'user-id',
      email: 'user@example.com',
      type: 'access',
    });

    await request(app.getHttpServer())
      .get('/api/profiles/profile-id')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect({
        id: 'profile-id',
        name: 'Frontend resume',
        userId: 'user-id',
      });
  });

  it('rejects an authenticated user accessing another user profile', async () => {
    prisma.profile.findUnique.mockResolvedValue({
      id: 'profile-id',
      name: 'Frontend resume',
      userId: 'other-user-id',
    });
    const accessToken = await jwtService.signAsync({
      id: 'user-id',
      email: 'user@example.com',
      type: 'access',
    });

    await request(app.getHttpServer())
      .get('/api/profiles/profile-id')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(403);
  });

  it('rejects a user-scoped profile request for another user', async () => {
    const accessToken = await jwtService.signAsync({
      id: 'user-id',
      email: 'user@example.com',
      type: 'access',
    });

    await request(app.getHttpServer())
      .get('/api/users/other-user-id/profiles')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(403);
  });

  it('requires authentication for every profile endpoint', async () => {
    await request(app.getHttpServer())
      .get('/api/users/user-id/profiles')
      .expect(401);
    await request(app.getHttpServer())
      .post('/api/users/user-id/profiles')
      .send({ name: 'Frontend resume' })
      .expect(401);
    await request(app.getHttpServer())
      .get('/api/profiles/profile-id')
      .expect(401);
    await request(app.getHttpServer())
      .patch('/api/profiles/profile-id')
      .send({ name: 'Backend resume' })
      .expect(401);
    await request(app.getHttpServer())
      .delete('/api/profiles/profile-id')
      .expect(401);
  });
});
