'use client';
import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import { getAllPosts } from '@/services/getPosts';
import { Spinner } from '@/components/Spinner/Spinner';
import { PostList } from '@/components/PostList/PostList';
import { Search } from '@/components/Search/Search';

// export const metadata: Metadata = {
//   title: 'Blog | My NextJS Blog',
//   description: 'List of blog articles',
// };

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Blog posts</h1>
      <Search onSearch={setPosts} />
      {isLoading ? <Spinner /> : <PostList posts={posts} />}
    </>
  );
}
