'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import s from './userMenu.module.css';
import Link from 'next/link';

function UserMenu() {
  const session = useSession();

  const logOut = () => {
    signOut({ callbackUrl: '/' });
  };

  console.log(session);

  return (
    <div className={s.wrapper}>
      {session?.data ? (
        <div className={s.userInfo}>
          {session.data.user?.image && (
            <img
              src={session.data.user?.image}
              alt="User Avatar"
              className={s.userAvatar}
            ></img>
          )}
          <div>
            <p>{session.data.user?.name}</p>
          </div>
          <div className={s.dropdownContent}>
            <Link href="/profile">Данные профиля</Link>
            <Link href="#">Избранное</Link>
            <Link className={s.exitButton} href="#" onClick={logOut}>
              Sign Out
            </Link>
          </div>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </div>
  );
}

export { UserMenu };
