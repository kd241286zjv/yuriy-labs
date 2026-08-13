import { validate } from 'class-validator';

import { UpdateProfileDto } from './update-profile.dto';

describe('UpdateProfileDto', () => {
  it.each([undefined, '', 42])('rejects an invalid name: %p', async (name) => {
    const dto = Object.assign(new UpdateProfileDto(), { name });

    await expect(validate(dto)).resolves.not.toHaveLength(0);
  });

  it('accepts a non-empty string name', async () => {
    const dto = Object.assign(new UpdateProfileDto(), {
      name: 'Backend resume',
    });

    await expect(validate(dto)).resolves.toHaveLength(0);
  });
});
