import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findByUserId(userId: string, authenticatedUserId: string) {
    this.ensureUserAccess(userId, authenticatedUserId);

    return this.prisma.profile.findMany({
      where: {
        userId: authenticatedUserId,
      },
    });
  }

  async findById(profileId: string, authenticatedUserId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    this.ensureProfileAccess(profile.userId, authenticatedUserId);

    return profile;
  }

  async update(
    profileId: string,
    updateProfileDto: UpdateProfileDto,
    authenticatedUserId: string,
  ) {
    await this.findById(profileId, authenticatedUserId);

    return this.prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        name: updateProfileDto.name,
      },
    });
  }

  async remove(profileId: string, authenticatedUserId: string) {
    await this.findById(profileId, authenticatedUserId);

    return this.prisma.profile.delete({
      where: {
        id: profileId,
      },
    });
  }

  async create(
    userId: string,
    createProfileDto: CreateProfileDto,
    authenticatedUserId: string,
  ) {
    this.ensureUserAccess(userId, authenticatedUserId);

    const user = await this.prisma.user.findUnique({
      where: {
        id: authenticatedUserId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.profile.create({
      data: {
        name: createProfileDto.name,
        userId: authenticatedUserId,
      },
    });
  }

  private ensureUserAccess(userId: string, authenticatedUserId: string) {
    if (userId !== authenticatedUserId) {
      throw new ForbiddenException('You do not have access to this user');
    }
  }

  private ensureProfileAccess(
    profileUserId: string,
    authenticatedUserId: string,
  ) {
    if (profileUserId !== authenticatedUserId) {
      throw new ForbiddenException('You do not have access to this profile');
    }
  }
}
