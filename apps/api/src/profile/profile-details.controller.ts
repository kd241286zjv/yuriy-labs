import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';

import type { AuthenticatedUser } from '../auth/auth.types';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
@UseGuards(JwtAuthGuard)
export class ProfileDetailsController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':profileId')
  findById(
    @Param('profileId') profileId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.profileService.findById(profileId, user.id);
  }

  @Patch(':profileId')
  update(
    @Param('profileId') profileId: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.profileService.update(profileId, updateProfileDto, user.id);
  }

  @Delete(':profileId')
  remove(
    @Param('profileId') profileId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.profileService.remove(profileId, user.id);
  }
}
