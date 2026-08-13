import { Module } from '@nestjs/common';

import { ProfileDetailsController } from './profile-details.controller';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController, ProfileDetailsController],
  providers: [ProfileService],
})
export class ProfileModule {}
