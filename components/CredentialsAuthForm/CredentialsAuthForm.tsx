'use client';
import type { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import s from './credentialsAuthForm.module.css';

function CredentialsAuthForm() {
  const router = useRouter();

  const handleSubmitAuthForm: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!!res && !res.error) {
      router.push('/profile');
    } else {
      console.log(res);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmitAuthForm}>
      <input type="email" name="email" required placeholder="Email" />
      <input type="password" name="password" required placeholder="Password" />
      <button type="submit">Sign in with Credentials</button>
    </form>
  );
}

export { CredentialsAuthForm };
