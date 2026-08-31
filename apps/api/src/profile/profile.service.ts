import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findByUserId(userId: string) {
    return this.prisma.profile.findMany({
      where: {
        userId,
      },
    });
  }

  async findById(profileId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  async update(profileId: string, updateProfileDto: UpdateProfileDto) {
    await this.findById(profileId);

    return this.prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        name: updateProfileDto.name,
      },
    });
  }

  async remove(profileId: string) {
    await this.findById(profileId);

    return this.prisma.profile.delete({
      where: {
        id: profileId,
      },
    });
  }

  async create(userId: string, createProfileDto: CreateProfileDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.profile.create({
      data: {
        name: createProfileDto.name,
        userId,
      },
    });
  }
}
