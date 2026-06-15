import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
});

export const usersSchema = z.array(userSchema).min(1);

export type User = z.infer<typeof userSchema>;