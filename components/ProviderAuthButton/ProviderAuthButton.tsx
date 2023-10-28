'use client';
import { MouseEventHandler } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

type Props = {
  provider: string;
  iconSrc: string;
};

function ProviderAuthButton({ provider, iconSrc }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const normalizedProviderString = provider.toLowerCase();

  const handleAuth: MouseEventHandler<HTMLButtonElement> = () => {
    signIn(normalizedProviderString, { callbackUrl });
  };

  return (
    <button onClick={handleAuth}>
      <Image
        src={iconSrc}
        alt={`${provider} link`}
        width={35}
        height={35}
        priority
      />
      <span>Sign in with {provider}</span>
    </button>
  );
}

export { ProviderAuthButton };
