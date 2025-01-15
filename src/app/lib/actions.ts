'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
// ...
 
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
    const rawFormData = {
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
      };

      console.log(rawFormData);
}