import { UnauthorizedException } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import type { JwtService } from '@nestjs/jwt';

import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  const jwtService = {
    verifyAsync: jest.fn(),
  };
  const guard = new JwtAuthGuard(jwtService as unknown as JwtService);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('authenticates an access token for /auth/me', async () => {
    const request = { headers: { authorization: 'Bearer access-token' } };
    const context = {
      switchToHttp: () => ({ getRequest: () => request }),
    } as unknown as ExecutionContext;
    jwtService.verifyAsync.mockResolvedValue({
      id: 'user-id',
      email: 'user@example.com',
      type: 'access',
    });

    await expect(guard.canActivate(context)).resolves.toBe(true);
    expect(request).toEqual({
      headers: { authorization: 'Bearer access-token' },
      user: {
        id: 'user-id',
        email: 'user@example.com',
      },
    });
  });

  it('rejects an unauthenticated /auth/me request', async () => {
    const request = { headers: {} };
    const context = {
      switchToHttp: () => ({ getRequest: () => request }),
    } as unknown as ExecutionContext;

    await expect(guard.canActivate(context)).rejects.toThrow(
      UnauthorizedException,
    );
  });
});
