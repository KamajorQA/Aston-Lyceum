import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth/next';
import s from './profile.module.css';

export default async function ProfilePage() {
  const session = await getServerSession(authConfig);

  return (
    <section className={s.wrapper}>
      <h1>Profile page</h1>
      <article className={s.item}>
        You are now logged in as:
        <h2>{session?.user?.name}</h2>
      </article>

      {session?.user?.image && (
        <article className={s.item}>
          <img src={session.user.image} alt="" className={s.avatar} />
        </article>
      )}
      <article className={s.item}>
        your email is:
        <h2>{session?.user?.email}</h2>
      </article>
    </section>
  );
}
