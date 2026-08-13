import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileDetailsController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':profileId')
  findById(@Param('profileId') profileId: string) {
    return this.profileService.findById(profileId);
  }

  @Patch(':profileId')
  update(
    @Param('profileId') profileId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(profileId, updateProfileDto);
  }
}
