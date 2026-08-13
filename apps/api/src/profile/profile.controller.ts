import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('users/:userId/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findByUserId(@Param('userId') userId: string) {
    return this.profileService.findByUserId(userId);
  }

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return this.profileService.create(userId, createProfileDto);
  }
}
