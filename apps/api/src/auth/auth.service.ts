import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, type JwtSignOptions } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { env } from '../config';
import { PrismaService } from '../prisma/prisma.service';
import type { LoginDto } from './dto/login.dto';
import type { RegisterDto } from './dto/register.dto';
import type { AuthenticatedUser, JwtPayload } from './auth.types';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const email = this.normalizeEmail(registerDto.email);
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    const passwordHash = await argon2.hash(registerDto.password);
    const user = await this.prisma.user.create({
      data: { email, passwordHash },
      select: { id: true, email: true },
    });

    return { user, ...(await this.createTokens(user)) };
  }

  async login(loginDto: LoginDto) {
    const email = this.normalizeEmail(loginDto.email);
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, passwordHash: true },
    });

    if (!user || !(await argon2.verify(user.passwordHash, loginDto.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const authenticatedUser = { id: user.id, email: user.email };

    return {
      user: authenticatedUser,
      ...(await this.createTokens(authenticatedUser)),
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload =
        await this.jwtService.verifyAsync<JwtPayload>(refreshToken);

      if (payload.type !== 'refresh') {
        throw new UnauthorizedException();
      }

      return {
        accessToken: await this.createAccessToken({
          id: payload.id,
          email: payload.email,
        }),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private async createTokens(user: AuthenticatedUser): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.createAccessToken(user),
      this.jwtService.signAsync(
        { ...user, type: 'refresh' } satisfies JwtPayload,
        this.tokenOptions(env.REFRESH_TOKEN_EXPIRY),
      ),
    ]);

    return { accessToken, refreshToken };
  }

  private createAccessToken(user: AuthenticatedUser) {
    return this.jwtService.signAsync(
      { ...user, type: 'access' } satisfies JwtPayload,
      this.tokenOptions(env.ACCESS_TOKEN_EXPIRY),
    );
  }

  private normalizeEmail(email: string) {
    return email.trim().toLowerCase();
  }

  private tokenOptions(expiresIn: string): JwtSignOptions {
    return { expiresIn: expiresIn as JwtSignOptions['expiresIn'] };
  }
}
