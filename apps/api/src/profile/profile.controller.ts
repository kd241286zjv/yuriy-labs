import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import type { AuthenticatedUser } from '../auth/auth.types';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('users/:userId/profiles')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findByUserId(
    @Param('userId') userId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.profileService.findByUserId(userId, user.id);
  }

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createProfileDto: CreateProfileDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.profileService.create(userId, createProfileDto, user.id);
  }
}
