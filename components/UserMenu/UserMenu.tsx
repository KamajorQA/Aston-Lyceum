'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Spinner } from '../Spinner/Spinner';
import s from './userMenu.module.css';

function UserMenu() {
  const session = useSession();

  const logOut = () => {
    signOut({ callbackUrl: '/' });
  };

  if (session.status === 'loading') {
    return (
      <div className={s.wrapper}>
        <Spinner height={'45'} width={'45'} />
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      {session?.data ? (
        <div className={s.userInfo}>
          <p>{session.data.user?.name}</p>

          {session.data.user?.image && (
            <img
              src={session.data.user?.image}
              alt=""
              className={s.userAvatar}
            ></img>
          )}
          <div className={s.dropdownContent}>
            <Link href="/profile">Profile</Link>
            <Link className={s.exitButton} href="#" onClick={logOut}>
              Sign&nbsp;Out
            </Link>
          </div>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign&nbsp;in</Link>
      )}
    </div>
  );
}

export { UserMenu };
