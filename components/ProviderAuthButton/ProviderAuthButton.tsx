'use client';
import { MouseEventHandler } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import s from './providerAuthButton.module.css';

type Props = {
  provider: string;
  iconSrc: string;
};

function ProviderAuthButton({ provider, iconSrc }: Props) {
  const normalizedProviderString = provider.toLowerCase();

  const handleAuth: MouseEventHandler<HTMLButtonElement> = () => {
    signIn(normalizedProviderString, { callbackUrl: '/auditorium' });
  };

  return (
    <button onClick={handleAuth} className={s.authButton}>
      <Image
        src={iconSrc}
        alt={`${provider} link`}
        width={30}
        height={30}
        priority
      />
      <span>Sign in with {provider}</span>
    </button>
  );
}

export { ProviderAuthButton };
