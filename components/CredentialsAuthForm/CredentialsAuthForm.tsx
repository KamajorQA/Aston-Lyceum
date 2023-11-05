'use client';
import { useState, type FormEventHandler } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import s from './credentialsAuthForm.module.css';

function CredentialsAuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  const [error, setError] = useState('');

  const handleSubmitAuthForm: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setError('');

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!!res && !res.error) {
      router.push(callbackUrl);
      setTimeout(() => window.location.reload(), 300);
    } else {
      const errMessage =
        res?.status === 401
          ? `Введены неверные логин/пароль`
          : `Ошибка ${res?.status}`;
      setError(errMessage);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmitAuthForm}>
      <input type="email" name="email" required placeholder="Email" />
      <input type="password" name="password" required placeholder="Password" />
      {!!error && <p className={`error ${s.authError}`}>{error}</p>}
      <button type="submit">Sign in with Credentials</button>
    </form>
  );
}

export { CredentialsAuthForm };
