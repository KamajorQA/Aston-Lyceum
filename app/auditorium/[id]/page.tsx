import { getSinglePostData } from '@/services/getPosts';
import { Metadata } from 'next';
// eslint-disable-next-line no-unused-vars
import Image from 'next/image';

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
  const articleTextHTML = { __html: post.content };

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <br />
      <hr />
      <br />
      <div className="content" dangerouslySetInnerHTML={articleTextHTML}></div>
    </article>
  );
}
