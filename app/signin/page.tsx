import { ProviderAuthButton } from '@/components/ProviderAuthButton/ProviderAuthButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | My NextJS Blog',
  description: 'Sign in page with available login options',
};

export default async function SignIn() {
  return (
    <section>
      <h1>Sign In</h1>
      <ProviderAuthButton provider={'Google'} iconSrc="icons/google.svg" />
      <ProviderAuthButton provider={'GitHub'} iconSrc="icons/gitHub.svg" />
    </section>
  );
}
