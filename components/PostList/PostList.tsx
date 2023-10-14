'use client';
import Link from 'next/link';
import s from './postList.module.css';

type Props = {
  posts: any[];
};

function PostList({ posts }: Props) {
  return (
    <section className={s.content}>
      {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </section>
  );
}

export { PostList };
