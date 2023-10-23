'use client';
import { useSession } from 'next-auth/react';

function LogInOut() {
  const session = useSession();

  console.log(session);

  return <div></div>;
}

export { LogInOut };
