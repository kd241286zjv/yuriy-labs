import { Controller, Get, Param } from '@nestjs/common';

import { ProfileService } from './profile.service';

@Controller('users/:userId/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findByUserId(@Param('userId') userId: string) {
    return this.profileService.findByUserId(userId);
  }
}
