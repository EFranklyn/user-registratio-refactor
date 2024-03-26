
import { z } from 'zod';
export const userSchema = z.object({
    lastName: z.string().min(1, 'Please fill in the Last Name.').regex(/^[A-Za-z][A-Za-z\s]*$/, "Only letters are allowed"),
    email: z.string().email(),
    name: z.string().min(1, 'Please fill in the name.').regex(/^[A-Za-z][A-Za-z\s]*$/, "Only letters are allowed")
});

export type User = z.infer<typeof userSchema>