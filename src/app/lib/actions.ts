'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// ...


const FormSchema = z.object({
  id: z.string(),
  username:z.string(),
  email:z.string(),
  phone:z.string(),
  password:z.string(),
});
 
const CreateUser = FormSchema.omit({ id: true});

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


export async function createUser(formData: FormData) {
    const {username, email, phone, password} = CreateUser.parse({
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
    });
    await sql`
    INSERT INTO fdt001user (fu_name, fu_email, fu_phone, fu_password)
    VALUES(${username}, ${email}, ${phone}, ${password})
    `;

    revalidatePath('/');
    redirect('/');
    
}


