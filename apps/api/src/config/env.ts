import 'dotenv/config';
import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  PORT: z.coerce.number().default(3000),

  DATABASE_URL: z.url(),

  JWT_SECRET: z.string().min(32),

  ACCESS_TOKEN_EXPIRY: z.string().default('15m'),

  REFRESH_TOKEN_EXPIRY: z.string().default('30d'),

  CORS_ORIGIN: z.url(),
});

export const env = envSchema.parse(process.env);
