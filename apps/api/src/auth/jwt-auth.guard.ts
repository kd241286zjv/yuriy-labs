import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import type { AuthenticatedUser, JwtPayload } from './auth.types';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<{
      headers: { authorization?: string };
      user?: AuthenticatedUser;
    }>();
    const token = this.extractToken(request.headers.authorization);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);

      if (payload.type !== 'access') {
        throw new UnauthorizedException();
      }

      request.user = { id: payload.id, email: payload.email };

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractToken(authorization?: string) {
    const [type, token] = authorization?.split(' ') ?? [];

    return type === 'Bearer' && token ? token : undefined;
  }
}
