import { getSinglePostData } from '@/services/getPosts';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getSinglePostData(id);

  return {
    title: post.title,
    description: `${id} post page`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getSinglePostData(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
