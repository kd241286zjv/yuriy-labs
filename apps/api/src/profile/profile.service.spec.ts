import { NotFoundException } from '@nestjs/common';

import type { PrismaService } from '../prisma/prisma.service';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  const prisma = {
    user: {
      findUnique: jest.fn(),
    },
    profile: {
      create: jest.fn(),
      delete: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  };
  const service = new ProfileService(prisma as unknown as PrismaService);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a profile after confirming the user exists', async () => {
    const profile = {
      id: 'profile-id',
      name: 'Frontend resume',
      userId: 'user-id',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.user.findUnique.mockResolvedValue({ id: 'user-id' });
    prisma.profile.create.mockResolvedValue(profile);

    await expect(
      service.create('user-id', { name: 'Frontend resume' }),
    ).resolves.toBe(profile);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { id: 'user-id' },
    });
    expect(prisma.profile.create).toHaveBeenCalledWith({
      data: {
        name: 'Frontend resume',
        userId: 'user-id',
      },
    });
  });

  it('throws when the user does not exist', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(
      service.create('missing-user-id', { name: 'Frontend resume' }),
    ).rejects.toThrow(NotFoundException);

    expect(prisma.profile.create).not.toHaveBeenCalled();
  });

  it('returns a profile by id', async () => {
    const profile = {
      id: 'profile-id',
      name: 'Frontend resume',
      userId: 'user-id',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.profile.findUnique.mockResolvedValue(profile);

    await expect(service.findById('profile-id')).resolves.toBe(profile);

    expect(prisma.profile.findUnique).toHaveBeenCalledWith({
      where: { id: 'profile-id' },
    });
  });

  it('throws when the profile does not exist', async () => {
    prisma.profile.findUnique.mockResolvedValue(null);

    await expect(service.findById('missing-profile-id')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('updates a profile name', async () => {
    const profile = {
      id: 'profile-id',
      name: 'Backend resume',
      userId: 'user-id',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.profile.findUnique.mockResolvedValue(profile);
    prisma.profile.update.mockResolvedValue(profile);

    await expect(
      service.update('profile-id', { name: 'Backend resume' }),
    ).resolves.toBe(profile);

    expect(prisma.profile.update).toHaveBeenCalledWith({
      where: { id: 'profile-id' },
      data: { name: 'Backend resume' },
    });
  });

  it('throws when updating a missing profile', async () => {
    prisma.profile.findUnique.mockResolvedValue(null);

    await expect(
      service.update('missing-profile-id', { name: 'Backend resume' }),
    ).rejects.toThrow(NotFoundException);

    expect(prisma.profile.update).not.toHaveBeenCalled();
  });

  it('deletes a profile', async () => {
    const profile = {
      id: 'profile-id',
      name: 'Frontend resume',
      userId: 'user-id',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.profile.findUnique.mockResolvedValue(profile);
    prisma.profile.delete.mockResolvedValue(profile);

    await expect(service.remove('profile-id')).resolves.toBe(profile);

    expect(prisma.profile.delete).toHaveBeenCalledWith({
      where: { id: 'profile-id' },
    });
  });

  it('throws when deleting a missing profile', async () => {
    prisma.profile.findUnique.mockResolvedValue(null);

    await expect(service.remove('missing-profile-id')).rejects.toThrow(
      NotFoundException,
    );

    expect(prisma.profile.delete).not.toHaveBeenCalled();
  });
});
