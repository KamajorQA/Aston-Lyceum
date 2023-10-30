import { Metadata } from 'next';
import { ProviderAuthButton } from '@/components/ProviderAuthButton/ProviderAuthButton';
import { CredentialsAuthForm } from '@/components/CredentialsAuthForm/CredentialsAuthForm';
import s from './signin.module.css';

export const metadata: Metadata = {
  title: 'Login | My NextJS Blog',
  description: 'Sign in page with available login options',
};

export default async function SignIn() {
  return (
    <section className={s.wrapper}>
      <h1>Sign In</h1>
      <article className={s.authGroup}>
        <ProviderAuthButton provider={'Google'} iconSrc="icons/google.svg" />
        <ProviderAuthButton provider={'GitHub'} iconSrc="icons/gitHub.svg" />
        <hr className={s.divider} />
        <CredentialsAuthForm />
      </article>
    </section>
  );
}
