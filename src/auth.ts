import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { ftUsers } from '@/app/lib/defininitions';
import bcrypt from 'bcrypt';
 

async function getUser(email: string): Promise<ftUsers | undefined> {
    try {
      const user = await sql<ftUsers>`SELECT * FROM fdt001user WHERE fu_email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }



export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {  
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(8) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.fu_password);
            console.log(user)

            if (passwordsMatch) return user;
          }

          console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});