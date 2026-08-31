import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ProfileDetailsController } from './profile-details.controller';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController, ProfileDetailsController],
  providers: [ProfileService],
})
export class ProfileModule {}
