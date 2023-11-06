'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/services/reduxHooks';
import { setPosts } from '@/redux/slices/postsSlice';
import { getAllPosts } from '@/services/getPosts';
import { Spinner } from '../Spinner/Spinner';
import s from './postList.module.css';

function PostList() {
  const postList = useAppSelector((state) => state.postsReducer.posts);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    getAllPosts()
      .then((posts) => {
        dispatch(setPosts(posts));
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  if (!!errorMessage) {
    return (
      <>
        <h1>Oops... An error occured!</h1>
        <h2 className="error">{errorMessage}</h2>
      </>
    );
  }

  return isLoading ? (
    <Spinner height={'80'} width={'80'} />
  ) : (
    <section className={s.content}>
      {!postList.length && <h2>No posts found</h2>}
      {postList.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/auditorium/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </section>
  );
}

export { PostList };
