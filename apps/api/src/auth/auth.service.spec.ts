import { ConflictException, UnauthorizedException } from '@nestjs/common';
import type { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import type { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';

jest.mock('argon2', () => ({
  hash: jest.fn(),
  verify: jest.fn(),
}));

describe('AuthService', () => {
  const prisma = {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  };
  const jwtService = {
    signAsync: jest.fn(),
    verifyAsync: jest.fn(),
  };
  const service = new AuthService(
    prisma as unknown as PrismaService,
    jwtService as unknown as JwtService,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('registers a user with a normalized email and hashed password', async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    jest.mocked(argon2.hash).mockResolvedValue('password-hash');
    prisma.user.create.mockResolvedValue({
      id: 'user-id',
      email: 'user@example.com',
    });
    jwtService.signAsync
      .mockResolvedValueOnce('access-token')
      .mockResolvedValueOnce('refresh-token');

    await expect(
      service.register({
        email: ' User@Example.com ',
        password: 'password123',
      }),
    ).resolves.toEqual({
      user: { id: 'user-id', email: 'user@example.com' },
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
    });

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
    });
    expect(argon2.hash).toHaveBeenCalledWith('password123');
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { email: 'user@example.com', passwordHash: 'password-hash' },
      select: { id: true, email: true },
    });
  });

  it('rejects duplicate email registration', async () => {
    prisma.user.findUnique.mockResolvedValue({ id: 'user-id' });

    await expect(
      service.register({ email: 'user@example.com', password: 'password123' }),
    ).rejects.toThrow(ConflictException);

    expect(argon2.hash).not.toHaveBeenCalled();
    expect(prisma.user.create).not.toHaveBeenCalled();
  });

  it('logs in with valid credentials', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-id',
      email: 'user@example.com',
      passwordHash: 'password-hash',
    });
    jest.mocked(argon2.verify).mockResolvedValue(true);
    jwtService.signAsync
      .mockResolvedValueOnce('access-token')
      .mockResolvedValueOnce('refresh-token');

    await expect(
      service.login({ email: 'USER@example.com', password: 'password123' }),
    ).resolves.toEqual({
      user: { id: 'user-id', email: 'user@example.com' },
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
    });

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
      select: { id: true, email: true, passwordHash: true },
    });
  });

  it('rejects invalid login credentials', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-id',
      email: 'user@example.com',
      passwordHash: 'password-hash',
    });
    jest.mocked(argon2.verify).mockResolvedValue(false);

    await expect(
      service.login({ email: 'user@example.com', password: 'wrong-password' }),
    ).rejects.toThrow(new UnauthorizedException('Invalid credentials'));
  });

  it('issues a new access token from a valid refresh token', async () => {
    jwtService.verifyAsync.mockResolvedValue({
      id: 'user-id',
      email: 'user@example.com',
      type: 'refresh',
    });
    jwtService.signAsync.mockResolvedValue('new-access-token');

    await expect(service.refresh('refresh-token')).resolves.toEqual({
      accessToken: 'new-access-token',
    });
  });

  it('rejects an invalid refresh token', async () => {
    jwtService.verifyAsync.mockRejectedValue(new Error('invalid token'));

    await expect(service.refresh('invalid-token')).rejects.toThrow(
      new UnauthorizedException('Invalid refresh token'),
    );
  });
});
