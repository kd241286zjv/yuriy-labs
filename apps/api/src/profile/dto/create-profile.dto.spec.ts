import { validate } from 'class-validator';

import { CreateProfileDto } from './create-profile.dto';

describe('CreateProfileDto', () => {
  it.each([undefined, '', 42])('rejects an invalid name: %p', async (name) => {
    const dto = Object.assign(new CreateProfileDto(), { name });

    await expect(validate(dto)).resolves.not.toHaveLength(0);
  });

  it('accepts a non-empty string name', async () => {
    const dto = Object.assign(new CreateProfileDto(), {
      name: 'Frontend resume',
    });

    await expect(validate(dto)).resolves.toHaveLength(0);
  });
});
