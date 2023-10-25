'use client';
import { useSession, signOut } from 'next-auth/react';
import s from './userMenu.module.css';
import Link from 'next/link';

function UserMenu() {
  const session = useSession();

  const logOut = () => {
    signOut({ callbackUrl: '/' });
  };

  console.log(session);
  console.log('Image >>', session.data?.user?.image);

  return (
    <div className={s.wrapper}>
      {session?.data ? (
        <div className={s.userInfo}>
          <p>{session.data.user?.name}</p>

          {session.data.user?.image && (
            <img
              src={session.data.user?.image}
              alt="User Avatar"
              className={s.userAvatar}
            ></img>
          )}
          <div className={s.dropdownContent}>
            <Link href="/profile">Profile</Link>
            {/* <Link href="#">Favorites</Link> */}
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
