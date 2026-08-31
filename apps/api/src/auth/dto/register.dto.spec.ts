import { validate } from 'class-validator';

import { RegisterDto } from './register.dto';

describe('RegisterDto', () => {
  it('rejects invalid registration input', async () => {
    const dto = Object.assign(new RegisterDto(), {
      email: 'not-an-email',
      password: 'short',
    });

    await expect(validate(dto)).resolves.not.toHaveLength(0);
  });
});
