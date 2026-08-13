import { Controller, Get, Param } from '@nestjs/common';

import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileDetailsController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':profileId')
  findById(@Param('profileId') profileId: string) {
    return this.profileService.findById(profileId);
  }
}
